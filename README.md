# Cyclo-Show
Cyclo-Show is a simple 3D rotating image carousel built using HTML, CSS, and JavaScript. This project allows users to navigate through images in a circular gallery with previous and next buttons, along with an automatic rotation feature.

## Demo
![Cyclo-Show Demo](https://picsum.photos/800/400)  

## Features
- 3D image carousel effect
- Smooth animations and transitions
- Manual navigation using Prev and Next buttons
- Auto-rotate functionality every 3 seconds

## Technologies Used
- HTML
- CSS (for 3D transformations and animations)
- JavaScript (for event handling and rotation logic)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/syarkota/cyclo-show.git
   ```
2. Navigate to the project folder:
   ```sh
   cd cyclo-show
   ```
3. Open `index.html` in a browser.

## Usage
- Click on the `Prev` button to rotate the images counterclockwise.
- Click on the `Next` button to rotate the images clockwise.
- The carousel will automatically rotate every 3 seconds.

## File Structure
```
cyclo-show/
│-- index.html  # Main HTML file
│-- style.css   # Stylesheet for design
│-- index.js    # JavaScript logic
│-- images/     # (Optional) Store local images
```

## Customization
- Change the image sources inside `index.html` to use your own images.
- Modify the `transform: rotateY(calc(var(--i)*45deg)) translateZ(400px);` in `style.css` to adjust spacing.
- Adjust the auto-rotation interval in `index.js` by modifying `setTimeout()` timing.

## Contributing
Feel free to submit issues or contribute by creating a pull request!

## License
This project is open-source and available under the [MIT License](LICENSE).

