<?php
/**
 * Search API Endpoint
 * Enhanced with insights from Nandha Kumar M's cybersecurity expertise
 * 
 * @author Nandha Kumar M
 * @description Professional search API for cybersecurity tools
 */

// Set content type to JSON
header('Content-Type: application/json');

// Enable CORS for all origins (in production, restrict to your domain)
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

try {
    // Get search parameters
    $query = isset($_GET['q']) ? trim($_GET['q']) : '';
    $category = isset($_GET['category']) ? trim($_GET['category']) : '';
    $limit = isset($_GET['limit']) ? intval($_GET['limit']) : 10;
    $offset = isset($_GET['offset']) ? intval($_GET['offset']) : 0;
    
    // Validate limit
    if ($limit <= 0 || $limit > 100) {
        $limit = 10;
    }
    
    // Validate offset
    if ($offset < 0) {
        $offset = 0;
    }
    
    // Load tools data
    $toolsData = loadToolsData();
    
    // Filter tools based on search criteria
    $filteredTools = filterTools($toolsData, $query, $category);
    
    // Sort tools by relevance
    $sortedTools = sortTools($filteredTools, $query);
    
    // Paginate results
    $paginatedTools = paginateTools($sortedTools, $limit, $offset);
    
    // Prepare response
    $response = [
        'status' => 'success',
        'timestamp' => gmdate('Y-m-d\TH:i:s\Z'),
        'data' => [
            'tools' => $paginatedTools,
            'totalResults' => count($sortedTools),
            'returnedResults' => count($paginatedTools),
            'query' => $query,
            'category' => $category,
            'limit' => $limit,
            'offset' => $offset
        ],
        'metadata' => [
            'apiVersion' => '1.0',
            'developer' => 'Nandha Kumar M',
            'organization' => 'CyberTools',
            'license' => 'MIT',
            'documentation' => 'https://cybertools.com/api/docs',
            'support' => 'https://cybertools.com/support'
        ]
    ];
    
    // Send response
    echo json_encode($response, JSON_PRETTY_PRINT);
    
} catch (Exception $e) {
    // Handle errors
    $errorResponse = [
        'status' => 'error',
        'timestamp' => gmdate('Y-m-d\TH:i:s\Z'),
        'error' => [
            'message' => $e->getMessage(),
            'code' => $e->getCode()
        ],
        'metadata' => [
            'apiVersion' => '1.0',
            'developer' => 'Nandha Kumar M',
            'organization' => 'CyberTools'
        ]
    ];
    
    http_response_code(500);
    echo json_encode($errorResponse, JSON_PRETTY_PRINT);
}

/**
 * Load tools data from JSON file
 * @return array - Tools data
 */
function loadToolsData() {
    $jsonFile = __DIR__ . '/tools.json';
    
    if (!file_exists($jsonFile)) {
        throw new Exception('Tools data file not found');
    }
    
    $jsonData = file_get_contents($jsonFile);
    $data = json_decode($jsonData, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON in tools data file');
    }
    
    return $data['data']['tools'] ?? [];
}

/**
 * Filter tools based on search criteria
 * @param array $tools - Tools data
 * @param string $query - Search query
 * @param string $category - Category filter
 * @return array - Filtered tools
 */
function filterTools($tools, $query, $category) {
    // Filter by category if specified
    if (!empty($category)) {
        $tools = array_filter($tools, function($tool) use ($category) {
            return strtolower($tool['category']) === strtolower($category);
        });
    }
    
    // Filter by query if specified
    if (!empty($query)) {
        $query = strtolower($query);
        $tools = array_filter($tools, function($tool) use ($query) {
            return strpos(strtolower($tool['name']), $query) !== false ||
                   strpos(strtolower($tool['description']), $query) !== false ||
                   in_array($query, array_map('strtolower', $tool['tags'] ?? []));
        });
    }
    
    return array_values($tools);
}

/**
 * Sort tools by relevance
 * @param array $tools - Tools data
 * @param string $query - Search query
 * @return array - Sorted tools
 */
function sortTools($tools, $query) {
    if (empty($query)) {
        // Sort by popularity if no query
        usort($tools, function($a, $b) {
            return $b['popularity'] <=> $a['popularity'];
        });
        return $tools;
    }
    
    // Sort by relevance to query
    $query = strtolower($query);
    usort($tools, function($a, $b) use ($query) {
        // Calculate relevance scores
        $scoreA = calculateRelevanceScore($a, $query);
        $scoreB = calculateRelevanceScore($b, $query);
        
        // Sort by descending relevance score
        if ($scoreA === $scoreB) {
            // If scores are equal, sort by popularity
            return $b['popularity'] <=> $a['popularity'];
        }
        
        return $scoreB <=> $scoreA;
    });
    
    return $tools;
}

/**
 * Calculate relevance score for a tool
 * @param array $tool - Tool data
 * @param string $query - Search query
 * @return int - Relevance score
 */
function calculateRelevanceScore($tool, $query) {
    $score = 0;
    
    // Exact name match (highest weight)
    if (strtolower($tool['name']) === $query) {
        $score += 100;
    }
    
    // Partial name match
    if (strpos(strtolower($tool['name']), $query) !== false) {
        $score += 50;
    }
    
    // Description match
    if (strpos(strtolower($tool['description']), $query) !== false) {
        $score += 25;
    }
    
    // Tag match
    if (isset($tool['tags'])) {
        foreach ($tool['tags'] as $tag) {
            if (strtolower($tag) === $query) {
                $score += 20;
            } elseif (strpos(strtolower($tag), $query) !== false) {
                $score += 10;
            }
        }
    }
    
    // Expert match
    if (isset($tool['expert']) && strpos(strtolower($tool['expert']), 'nandha') !== false) {
        $score += 5;
    }
    
    return $score;
}

/**
 * Paginate tools
 * @param array $tools - Tools data
 * @param int $limit - Results per page
 * @param int $offset - Offset for pagination
 * @return array - Paginated tools
 */
function paginateTools($tools, $limit, $offset) {
    return array_slice($tools, $offset, $limit);
}

/**
 * Add Nandha's expertise insight
 * @return string - Expert insight
 */
function addNandhaInsight() {
    return "
        In penetration testing, search functionality is crucial for quickly finding relevant tools and resources. 
        Nandha Kumar M's research shows that efficient search capabilities help security professionals 
        rapidly access the tools they need for specific testing scenarios.
        
        Key considerations:
        - Implement fuzzy search for better results
        - Support category filtering
        - Enable tag-based search
        - Optimize for performance
        - Validate search inputs
        - Implement proper error handling
        - Analyze search in GraphQL introspection testing
        - Optimize search in Android pentesting scenarios
    ";
}

// Add Nandha's expertise insight
if (isset($_GET['insight']) && $_GET['insight'] === 'true') {
    echo json_encode([
        'status' => 'success',
        'timestamp' => gmdate('Y-m-d\TH:i:s\Z'),
        'insight' => addNandhaInsight(),
        'metadata' => [
            'apiVersion' => '1.0',
            'developer' => 'Nandha Kumar M',
            'organization' => 'CyberTools'
        ]
    ], JSON_PRETTY_PRINT);
}
?>