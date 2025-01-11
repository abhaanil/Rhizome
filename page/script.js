const testDiv = document.getElementById('chartbox');

const width = testDiv.offsetWidth;
const height = testDiv.offsetHeight;

console.log('asdf =>', width, height);

// Clusters and Subclusters Data

    const data = {
      nodes: [
        { id: "Networks and Post-Digital Art", group: "maincluster"},

        { id: "Ethics", group: "cluster"},
        { id: "Mans VR World", group: "subcluster" },
        { id: "Women's Rights", group: "subcluster" },
        { id: "Race and Diversity", group: "subcluster" },
        { id: "Ethics as Artists", group: "subcluster" },
        { id: "Artists and Compensation", group: "subcluster" },

        { id: "Digital Divide", group: "cluster"},
        { id: "Disability and Crip Art", group: "subcluster" },
        { id: "Accessibility to Technology", group: "subcluster" },
        { id: "Shadow Banning", group: "subcluster" },
        { id: "Intersectionality", group: "subcluster" },

        { id: "New Art Media", group: "cluster" },
        { id: "Projection Mapping", group: "subcluster" },
        { id: "3D Drawing", group: "subcluster" },
        { id: "Digital Clothing", group: "subcluster" },
        { id: "Disability Art", group: "subcluster" },
        { id: "Sound", group: "subcluster" },
        { id: "Electricity for Transduction", group: "subcluster" },
        { id: "Slow Art Movement", group: "subcluster" },

        { id: "Capitalism", group: "cluster"},
        { id: "Resting as Protest", group: "subcluster" },
        { id: "Anti-Capitalist Artwork", group: "subcluster" },
        { id: "Entertainment", group: "cluster" },
        { id: "Video Games", group: "subcluster" },
        { id: "Music", group: "subcluster" },
        { id: "Virtual Bloggers", group: "subcluster" },
        { id: "Hyper Real Parks", group: "subcluster" },
        { id: "Immersive Experiences", group: "subcluster" },
        { id: "AI", group: "cluster" },
        { id: "Art", group: "subcluster" },
        { id: "Emotions", group: "subcluster" },
        { id: "Racism", group: "subcluster" },
        { id: "NFT/Crypto", group: "cluster" },
        { id: "What are NFTs", group: "subcluster" },
        { id: "Environmental Friendly NFTs?", group: "subcluster" },
        { id: "Revolution in the Art World", group: "subcluster" },
        { id: "Pixel Art and NFTs", group: "subcluster" },
        { id: "Are NFTs the Future", group: "subcluster" },
        { id: "Hyperrealities", group: "cluster" },
        { id: "What is Reality?", group: "subcluster" },
        { id: "What is Time?", group: "subcluster" },
        { id: "Post-Humanism", group: "subcluster" },
        { id: "Color Blindness Paradox", group: "subcluster" },
        { id: "Metaverse", group: "subcluster" },
        { id: "Donna Haraway", group: "subcluster" },
        
        { id: "Digital Media and Crime", group: "cluster" },
        { id: "Deepfake Pornography", group: "subcluster" },
        { id: "Misinformation", group: "subcluster" },
        { id: "Sexual Crimes on VR", group: "subcluster" },
        { id: "Being Weaponized", group: "subcluster" },
        { id: "Social Media", group: "cluster" },
        { id: "TikTok", group: "subcluster" },
        { id: "Algorithm", group: "subcluster" },
        { id: "Deepfake", group: "subcluster" },
        { id: "Camera Filters", group: "subcluster" },
        { id: "Intersectional Feminism", group: "subcluster" },
        { id: "Anxiety", group: "subcluster" },
        { id: "Influencers", group: "subcluster" },
        { id: "Speculative Science Fiction", group: "cluster" },
        { id: "Solar Punk", group: "subcluster" },
        { id: "Transhumanism", group: "subcluster" },
        { id: "Indigenous Futurism", group: "subcluster" },
        { id: "Cyberpunk", group: "subcluster" },
        { id: "Climate Change", group: "cluster" },
        { id: "Virtual Materiality", group: "cluster" },
      ],
  
  links: [

    // Networks and post digital art

    { source: "Networks and Post-Digital Art", target: "Ethics"},
    { source: "Networks and Post-Digital Art", target: "Digital Divide" },
    { source: "Networks and Post-Digital Art", target: "New Art Media" },
    { source: "Networks and Post-Digital Art", target: "Capitalism" },
    { source: "Networks and Post-Digital Art", target: "Entertainment" },
    { source: "Networks and Post-Digital Art", target: "AI" },
    { source: "Networks and Post-Digital Art", target: "NFT/Crypto" },
    { source: "Networks and Post-Digital Art", target: "Hyperrealities" },
    
    { source: "Networks and Post-Digital Art", target: "Digital Media and Crime" },
    { source: "Networks and Post-Digital Art", target: "Social Media" },
    { source: "Networks and Post-Digital Art", target: "Speculative Science Fiction" },
    { source: "Networks and Post-Digital Art", target: "Climate Change" },
    { source: "Networks and Post-Digital Art", target: "Virtual Materiality" },
    

    // Ethics
  { source: "Ethics", target: "Mans VR World" },
  { source: "Ethics", target: "Women's Rights" },
  { source: "Ethics", target: "Race and Diversity" },
  { source: "Ethics", target: "Ethics as Artists" },
  { source: "Ethics", target: "Artists and Compensation" },

  // Digital Divide
  { source: "Digital Divide", target: "Disability and Crip Art" },
  { source: "Digital Divide", target: "Accessibility to Technology" },
  { source: "Digital Divide", target: "Shadow Banning" },
  { source: "Digital Divide", target: "Intersectionality" },

  // New Art Media
  { source: "New Art Media", target: "Projection Mapping"},
  { source: "New Art Media", target: "3D Drawing" },
  { source: "New Art Media", target: "Digital Clothing" },
  { source: "New Art Media", target: "Disability Art" },
  { source: "New Art Media", target: "Sound" },
  { source: "New Art Media", target: "Electricity for Transduction" },
  { source: "New Art Media", target: "Slow Art Movement" },

  

  // Capitalism
  { source: "Capitalism", target: "Resting as Protest" },
  { source: "Capitalism", target: "Anti-Capitalist Artwork" },

  // Entertainment
  { source: "Entertainment", target: "Video Games" },
  { source: "Entertainment", target: "Music" },
  { source: "Entertainment", target: "Virtual Bloggers" },
  { source: "Entertainment", target: "Hyper Real Parks" },
  { source: "Entertainment", target: "Immersive Experiences" },

  // AI
  { source: "AI", target: "Art" },
  { source: "AI", target: "Emotions" },
  { source: "AI", target: "Racism" },

  // NFT/Crypto
  { source: "NFT/Crypto", target: "What are NFTs" },
  { source: "NFT/Crypto", target: "Environmental Friendly NFTs?" },
  { source: "NFT/Crypto", target: "Revolution in the Art World" },
  { source: "NFT/Crypto", target: "Pixel Art and NFTs" },
  { source: "NFT/Crypto", target: "Are NFTs the Future" },

  // Hyperrealities
  { source: "Hyperrealities", target: "What is Reality?" },
  { source: "Hyperrealities", target: "What is Time?" },
  { source: "Hyperrealities", target: "Post-Humanism" },
  { source: "Hyperrealities", target: "Color Blindness Paradox" },
  { source: "Hyperrealities", target: "Metaverse" },
  { source: "Hyperrealities", target: "Donna Haraway" },

  

  // Digital Media and Crime
  { source: "Digital Media and Crime", target: "Deepfake Pornography" },
  { source: "Digital Media and Crime", target: "Misinformation" },
  { source: "Digital Media and Crime", target: "Sexual Crimes on VR" },
  { source: "Digital Media and Crime", target: "Being Weaponized" },

  // Social Media
  { source: "Social Media", target: "TikTok" },
  { source: "Social Media", target: "Algorithm" },
  { source: "Social Media", target: "Deepfake" },
  { source: "Social Media", target: "Camera Filters" },
  { source: "Social Media", target: "Intersectional Feminism" },
  { source: "Social Media", target: "Anxiety" },
  { source: "Social Media", target: "Influencers" },

  // Speculative Science Fiction
  { source: "Speculative Science Fiction", target: "Solar Punk" },
  { source: "Speculative Science Fiction", target: "Transhumanism" },
  { source: "Speculative Science Fiction", target: "Indigenous Futurism" },
  { source: "Speculative Science Fiction", target: "Cyberpunk" },

  ],
};

const clusterIconMap = {
  "Networks and Post-Digital Art": "icons/networks.svg",
  "Ethics": "icons/ethics.svg",
  "Digital Divide": "icons/digital_divide.svg",
  "New Art Media": "icons/new_art_media.svg",
  "Capitalism": "icons/capitalism.svg",
  "Entertainment": "icons/entertainment.svg",
  "AI": "icons/ai.svg",
  "NFT/Crypto": "icons/nft_crypto.svg",
  "Hyperrealities": "icons/hyperrealities.svg",

  "Digital Media and Crime": "icons/digital_media_crime.svg",
  "Social Media": "icons/social_media.svg",
  "Speculative Science Fiction": "icons/speculative_science_fiction.svg",
  "Climate Change": "icons/climate_change.svg",
  "Virtual Materiality": "icons/virtual_materiality.svg",
  
};

const clusterSizeMap = {
  "Ethics": { width: 80, height: 80 },
  "Digital Divide": { width: 160, height: 160 },
  "New Art Media": { width: 130, height: 130 },
  "Capitalism": { width: 180, height: 180 },
  "Entertainment": { width: 210, height: 210 },
  "AI": { width: 100, height: 100 },
  "NFT/Crypto": { width: 90, height: 90 },
  "Hyperrealities": { width: 90, height: 90 },
  
  "Digital Media and Crime": { width: 130, height: 130 },
  "Social Media": { width: 150, height: 150 },
  "Speculative Science Fiction": { width: 170, height: 170 },
  "Climate Change": { width: 100, height: 100 },
  "Virtual Materiality": { width: 120, height: 120 }
  
};



// Create an SVG container
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", height);


// Create a force simulation with collision detection
const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(120)) // Links
  .force("charge", d3.forceManyBody().strength(-120)) // Node repulsion
  .force("center", d3.forceCenter(width / 2, height / 2)) // Centering
  .force(
    "collision",
    d3.forceCollide()
      .radius(d => {
        // Use the larger dimension (width or height) as the collision radius
        const size = clusterSizeMap[d.id] || { width: 40, height: 40 }; // Default size if not defined
        return Math.max(size.width, size.height) / 2 + 10; // Add padding (10px)
      })
      .strength(1) // Higher strength for stricter collision enforcement
  );


// Add links (lines connecting nodes)
const link = svg.append("g")
  .selectAll("line")
  .data(data.links)
  .join("line")
  .attr("class", "link");

  // Add nodes (circles and images)
const node = svg.append("g")
.selectAll("g")
.data(data.nodes)
.join("g");

// Add circles for subcluster nodes
node.filter(d => d.group === "subcluster")
.append("circle")
.attr("class", "subcluster")
.attr("r", 50); // Radius for subcluster circles


// Add rectangle for the main cluster
node.filter(d => d.group === "maincluster")
  .append("rect")
  .attr("class", "maincluster-rect")
  .attr("x", -150) // Center horizontally
  .attr("y", -30)  // Center vertically
  .attr("width", 360) // Width of the rectangle
  .attr("height", 40) // Height of the rectangle
  .attr("rx", 15) // Rounded corners
  .attr("ry", 15); // Rounded corners

// Add text for the main cluster
node.filter(d => d.group === "maincluster")
  .append("text")
  .attr("class", "maincluster-text")
  .attr("x", 30) // Center horizontally
  .attr("y", -8)  // Adjust text position
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .text("NETWORKS AND POST-DIGITAL ART");


// Adjust collision logic for the main cluster
simulation.force(
  "collision",
  d3.forceCollide()
    .radius(d => {
      const size = clusterSizeMap[d.id] || { width: 40, height: 40 };
      if (d.group === "maincluster") {
        return 98; // Collision radius for the main cluster (larger for the rectangle)
      }
      return Math.max(size.width, size.height) / 2 + 10; // Default radius for other nodes
    })
    .strength(1) // Higher strength for stricter collision enforcement
);


// Add icons for cluster nodes
node.filter(d => d.group === "cluster")
.append("image")
.attr("href", d => clusterIconMap[d.id]) // Map the SVG path
.attr("width", d => clusterSizeMap[d.id]?.width || 40) // Default to 40 if not found
.attr("height", d => clusterSizeMap[d.id]?.height || 40)
.attr("x", d => -(clusterSizeMap[d.id]?.width || 40) / 2) // Center horizontally
.attr("y", d => -(clusterSizeMap[d.id]?.height || 40) / 2); // Center vertically



// Add labels only for nodes without custom icons (subclusters)
// Add labels only for nodes without custom icons (subclusters)
const label = svg.append("g")
  .selectAll("text")
  .data(data.nodes.filter(d => d.group !== "maincluster" && d.group !== "cluster")) // Exclude nodes with custom icons
  .join("text")
  .attr("class", "label")
  .text(d => d.id);


// Update tick function
simulation.on("tick", () => {
    const padding = 20; // Minimum space from the edges
  
    // Update link positions and clamp within bounds
    link
      .attr("x1", d => Math.max(padding, Math.min(width - padding, d.source.x)))
      .attr("y1", d => Math.max(padding, Math.min(height - padding, d.source.y)))
      .attr("x2", d => Math.max(padding, Math.min(width - padding, d.target.x)))
      .attr("y2", d => Math.max(padding, Math.min(height - padding, d.target.y)));
  
    // Update node positions and clamp within bounds
    node.attr("transform", d => {
      const nodePadding = 50; // Add extra padding for larger nodes
      const radius = Math.max(clusterSizeMap[d.id]?.width || 40, clusterSizeMap[d.id]?.height || 40) / 2;
  
      // Ensure nodes stay within bounds
      d.x = Math.max(padding + radius, Math.min(width - padding - radius, d.x));
      d.y = Math.max(padding + radius, Math.min(height - padding - radius, d.y));
  
      return `translate(${d.x},${d.y})`;
    });
  
    // Update label positions to match nodes
    label
      .attr("x", d => Math.max(padding, Math.min(width - padding, d.x)))
      .attr("y", d => Math.max(padding, Math.min(height - padding, d.y)));
  });
  

  

// Dragging behavior for nodes
function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
}

node.on("mouseover", (event, d) => {
  // Highlight the node
  if (d.group === "cluster") {
    d3.select(event.currentTarget).select("image")
      .transition()
      .duration(200)
      .attr("width", d => (clusterSizeMap[d.id]?.width || 40) * 1.2) // Increase size by 20%
      .attr("height", d => (clusterSizeMap[d.id]?.height || 40) * 1.2)
      .attr("x", d => -((clusterSizeMap[d.id]?.width || 40) * 1.2) / 2) // Adjust position
      .attr("y", d => -((clusterSizeMap[d.id]?.height || 40) * 1.2) / 2);
  }

  // Highlight connected links
  link.filter(l => l.source.id === d.id || l.target.id === d.id)
    .transition()
    .duration(200)
    .attr("stroke-width", 4) // Increase link width
    .attr("stroke", "orange"); // Change link color
});

node.on("mouseout", (event, d) => {
  // Reset the node
  if (d.group === "cluster") {
    d3.select(event.currentTarget).select("image")
      .transition()
      .duration(200)
      .attr("width", d => clusterSizeMap[d.id]?.width || 40)
      .attr("height", d => clusterSizeMap[d.id]?.height || 40)
      .attr("x", d => -(clusterSizeMap[d.id]?.width || 40) / 2)
      .attr("y", d => -(clusterSizeMap[d.id]?.height || 40) / 2);
  }

  // Reset connected links
  link.filter(l => l.source.id === d.id || l.target.id === d.id)
    .transition()
    .duration(200)
    .attr("stroke-width", 1) // Reset link width
    .attr("stroke", "#999"); // Reset link color
});



// Attach drag behavior to nodes
node.call(drag(simulation));

//title names on hover
node.filter(d => d.group === "cluster")
  .attr("href", d => clusterIconMap[d.id]) // Map the SVG path
  .attr("width", d => clusterSizeMap[d.id]?.width || 40) // Default to 40 if not found
  .attr("height", d => clusterSizeMap[d.id]?.height || 40)
  .attr("x", d => -(clusterSizeMap[d.id]?.width || 40) / 2) // Center horizontally
  .attr("y", d => -(clusterSizeMap[d.id]?.height || 40) / 2) // Center vertically
  .append("title") // Add title for hover text
  .text(d => d.id); // Use node ID as description


// Handle window resizing
window.addEventListener("resize", () => {
  const testDiv = document.getElementById('chartbox');

  // Use offsetWidth and offsetHeight to get the new dimensions of the container
  const newWidth = testDiv.offsetWidth;
  const newHeight = testDiv.offsetHeight;

  svg.attr("width", newWidth).attr("height", newHeight);

  simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
  simulation.alpha(1).restart();
});


