document
  .getElementById('share-btn')
  .addEventListener('click', displaySharePrompt);

const postFooter = document.getElementById('post-footer');
const tooltip = document.getElementById('share-tooltip');
const shareButton = document.getElementById('share-btn');
const shareIcon = document.getElementById('share-icon');
const tooltipContent = document.getElementById('tooltip-content');
const authorContent = document.getElementById('author-details');

function displaySharePrompt() {
  if (tooltip.style.display == 'none') {
    tooltip.style.display = 'block';
    shareButton.style.backgroundColor = 'hsl(214, 17%, 51%)';
    shareIcon.style.fill = 'hsl(210, 46%, 95%)';
  } else {
    tooltip.style.display = 'none';
    shareButton.style.backgroundColor = 'hsl(210, 46%, 95%)';
    shareIcon.style.fill = 'hsl(214, 17%, 51%)';
  }
}
