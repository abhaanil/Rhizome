const width = window.innerWidth;
const height = window.innerHeight -400;

// Clusters and Subclusters Data

    const data = {
      nodes: [
        { id: "Networks and Post-Digital Art", group: "maincluster" },
        { id: "Ethics", group: "cluster" },
        { id: "Mans VR World", group: "subcluster" },
        { id: "Women's Rights", group: "subcluster" },
        { id: "Race and Diversity", group: "subcluster" },
        { id: "Ethics as Artists", group: "subcluster" },
        { id: "Artists and Compensation", group: "subcluster" },
        { id: "New Art Media", group: "cluster" },
        { id: "Projection Mapping", group: "subcluster" },
        { id: "3D Drawing", group: "subcluster" },
        { id: "Digital Clothing", group: "subcluster" },
        { id: "Disability Art", group: "subcluster" },
        { id: "Sound", group: "subcluster" },
        { id: "Electricity for Transduction", group: "subcluster" },
        { id: "Slow Art Movement", group: "subcluster" },
        { id: "Capitalism", group: "cluster" },
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
        { id: "Digital Divide", group: "cluster" },
        { id: "Disability and Crip Art", group: "subcluster" },
        { id: "Accessibility to Technology", group: "subcluster" },
        { id: "Shadow Banning", group: "subcluster" },
        { id: "Intersectionality", group: "subcluster" },
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

    { source: "Networks and Post-Digital Art", target: "Ethics" },
    { source: "Networks and Post-Digital Art", target: "New Art Media" },
    { source: "Networks and Post-Digital Art", target: "Capitalism" },
    { source: "Networks and Post-Digital Art", target: "Entertainment" },
    { source: "Networks and Post-Digital Art", target: "AI" },
    { source: "Networks and Post-Digital Art", target: "NFT/Crypto" },
    { source: "Networks and Post-Digital Art", target: "Hyperrealities" },
    { source: "Networks and Post-Digital Art", target: "Digital Divide" },
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

  // New Art Media
  { source: "New Art Media", target: "Projection Mapping" },
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

  // Digital Divide
  { source: "Digital Divide", target: "Disability and Crip Art" },
  { source: "Digital Divide", target: "Accessibility to Technology" },
  { source: "Digital Divide", target: "Shadow Banning" },
  { source: "Digital Divide", target: "Intersectionality" },

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

// Create SVG container
const svg = d3.select("#chart").append("svg")
  .attr("width", width)
  .attr("height", height);

// Define simulation
const simulation = d3.forceSimulation(data.nodes)
  .force("link", d3.forceLink(data.links).id(d => d.id).distance(160)) // Link distances
  .force("charge", d3.forceManyBody().strength(-70)) // Node repulsion
  .force("center", d3.forceCenter(width / 2, height / 2)) // Centering force
  .force("collision", d3.forceCollide().radius(d => {
    if (d.group === "maincluster") return 60; // Add extra spacing for larger nodes
    return d.group === "cluster" ? 40 : 25; // Adjust spacing for other nodes
  }));


// Add links
const link = svg.append("g")
  .selectAll("line")
  .data(data.links)
  .join("line")
  .attr("class", "link");

// Add nodes
const node = svg.append("g")
  .selectAll("circle")
  .data(data.nodes)
  .join("circle")
  .attr("class", d => {
    if (d.group === "maincluster") return "maincluster"; // Assign "main" class for the main cluster
    return d.group === "cluster" ? "cluster" : "subcluster"; // Handle other groups
  })
  .attr("r", d => {
    if (d.group === "maincluster") return 50; // Larger size for the main cluster
    return d.group === "cluster" ? 30 : 20; // Other sizes
  })
  .call(drag(simulation));

  

// Add labels
const label = svg.append("g")
  .selectAll("text")
  .data(data.nodes)
  .join("text")
  .attr("class", "label")
  .attr("text-anchor", "middle")
  .attr("dy", ".35em")
  .text(d => d.id);

// Constrain nodes to SVG bounds
simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node
    .attr("cx", d => d.x = Math.max(20, Math.min(width - 20, d.x))) // Constrain horizontally
    .attr("cy", d => d.y = Math.max(20, Math.min(height - 20, d.y))); // Constrain vertically

  label
    .attr("x", d => d.x)
    .attr("y", d => d.y);
});

// Dragging functions
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

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight - 400;

  // Update SVG dimensions
  svg.attr("width", newWidth)
  .attr("height", newHeight);

  // Update simulation forces
  simulation.force("center", d3.forceCenter(newWidth / 2, newHeight / 2));
  simulation.alpha(1).restart(); // Restart simulation for smooth transition
});