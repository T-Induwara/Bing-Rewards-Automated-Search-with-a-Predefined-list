const searchItems = [
    "acer",
    "acer predator",
    "react js",
    "vs code",
    "sliit",
    "java",
    "r studio",
    "rc basher",
    //If you want to add more items or need to change the list that suits for your preferences, feel free to add those here
];

function openTab(url) {
    window.open(url, '_blank');
}

async function performSearch(query) {
    try {
        const response = await fetch(`proxy.php?q=${encodeURIComponent(query)}`);
        console.log(`Search query: ${query}, Status code: ${response.status}`);
        
        // Open a new tab with the Bing search results
        openTab(`https://www.bing.com/search?q=${encodeURIComponent(query)}`);
    } catch (error) {
        console.error(`Error performing search: ${error}`);
    }
}

async function performSearchesWithDelay() {
    for (const item of searchItems) {
        await performSearch(item);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Delay for 3 seconds
    }
}

performSearchesWithDelay();