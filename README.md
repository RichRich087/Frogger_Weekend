
Frogger - The Game

Welcome to Frogger - The Game! This is a classic arcade-style game where you control a frog and help it cross a busy road, avoid dangerous obstacles, and reach its destination safely. Your goal is to guide the frog to the top row of the game board without getting hit by cars or caught by birds. Are you up for the challenge?

Table of Contents
Introduction
Game Overview
How to Play
Level Components
Start/Pause Button
Testing
Rainbow Header
Contributing
License
Game Overview
Frogger is a classic arcade game where you control a frog using arrow keys to navigate through the game board. The objective is to guide the frog safely to the top row, represented by the "safe zone," without getting hit by cars or caught by birds. The game board consists of a grid with various moving cars, birds, logs, and water areas.

How to Play
You will see the game board with a frog at the bottom row.
Use the arrow keys (Up, Down, Left, Right) to move the frog in the respective direction.
Avoid colliding with cars or birds, as they will end the game.
Jump on logs to cross the water areas safely.
Reach the top row to win the game and proceed to the next level.
Use the "Start/Pause" button to start or pause the game.
Level Components

Frogs

You can initially choose from 4 frogs:

<img width="35" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/7d2b1e87-6205-4397-814b-1100058cf2ac">
<img width="32" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/0565faed-a991-42a9-a97d-97e04278727c">
<img width="24" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/c39eda41-3344-4fa9-ba6a-f03203b3043e">
<img width="29" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/dbc9c57f-95d1-4fec-8bbc-8424a315800f">


Cars
The game includes several cars that move horizontally across the game board. Cars are hazardous to the frogs wellbeing. Avoid getting hit by them.

<img width="416" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/eca556a1-03e7-499b-9934-7bef668a277c">

Birds
Birds are another type of obstacle in the game. They move horizontally across the game board and can catch the frog. Birds are represented by images of birds.

<img width="422" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/084b1a79-0061-4e0f-ba82-116d3f3e2ca8">

Logs
Logs provide a safe path for the frog to cross water areas. They move horizontally and are represented by images of logs. Jump on the logs to avoid falling into the water.

<img width="398" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/dde479e1-35ad-4af2-aba3-178b5f0af157">


Water
Water areas are hazardous to the frog unless the frog is standing on a log. Water is represented by blue squares.

<img width="398" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/3fc0dd4e-6c92-4541-a88a-9fbafe8d93ca">

Start/Pause Button
The "Start/Pause" button allows you to control the game's flow. Clicking the button will start or pause the game depending on its current state.

<img width="397" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/dacbe38a-bf30-4a2d-93b1-557007d961cc">

Rainbow Header
The game's header has a rainbow color effect, giving it a visually appealing look.

<img width="1258" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/3d0d6eab-9471-4af4-b540-5a3fddad0d38">

Testing
The primary focus of our testing strategy for the Frogger game was to ensure that all its features were working as intended, providing the users with an intuitive and straightforward gaming experience. Each component was tested individually, and then in tandem with others, to guarantee that they interacted smoothly.

Below are the key features of our project that we focused on during the testing process:

Game board creation: We tested the game board creation functionality to ensure that the correct number of rows and cells were being generated.

Game board update: We tested the game board update functionality to confirm that the game state was reflected correctly. This included testing the rendering of the frog, cars, birds, logs, and water.

Collision detection: We verified that the game accurately detected and handled collisions between the frog and other elements. This included collisions with cars, birds, and water.

Frog movement: We checked the frog movement to confirm that it followed the arrow key inputs from the user. Additionally, we ensured that the frog did not go out of bounds.

Game start/pause: We tested the start and pause functionality to ensure that it correctly toggled the game state.

Prompt for selecting frogs: We tested the prompt to select the frog to ensure that it appears correctly and accepts valid inputs.

Game over conditions: We tested the conditions for the game to end to verify that they worked as expected. This included checking if the game ended correctly when the frog collided with a car or bird, or fell into the water.

Throughout the testing process, we ran the application on different browsers including Chrome, Firefox, Safari, and Edge, and various screen sizes to make sure it provided a consistent user experience. The game performed well across all the tested browsers and screen sizes. The game works well on all screen sizes even mobile without any changes neccessary. Due to the size of the grid it is however adviced to play the game on a larger screen device.

Notable bugs and issues
Here are some of the notable bugs that we encountered during our testing:

Frog moving when paused: Initially, the frog could be moved even when the game was paused. This issue was addressed by adding a condition to the keydown event listener to only allow movement when the game is running.

<img width="359" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/be2dca22-ba19-4c21-a1c1-7600ef1a8302">


Frog not dying when getting hit from side: Initially the frog would not die if hit from the side. We discovered that by utilizing a function to check the states every 50 milleseconds the issue was resolved:

<img width="500" alt="image" src="https://github.com/RichRich087/Frogger_Weekend/assets/128620545/be186792-8fc3-4828-9035-597a9d9e5cc9">


Responsive Design
This was not neccessary. The game has a good style all the way to mobile screen sizes. Due to the size of the grid it is however adviced to play the game on a larger screen device.


Validator Testing 
W3C VALIDATOR
JIGSAW VALIDATOR
JAVASCRIPT VALIDATOR

Unfixed Bugs
No current bugs exist. However we do have some recommendations for future updates to the game. We could add a timer to the game to create a time limit the user has to completing the game in. This could also increase the difficulty of future levels by decreasing the time available. 
A more elegant solution could be created for the frog selection process. 
Outside of these recommendations we are looking at a perfect product.

Deployment

The game was deployed utilizing the Github hosting platform.
The team followed the following steps to deploy the website:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.
Here you can find the live link:  https://richrich087.github.io/Frogger_Weekend/


Contributing
If you wish to contribute to this project or report any issues, please visit the GitHub repository and create a pull request or an issue.

License
This project is licensed under the MIT License. You are free to use, modify, and distribute the code for personal or educational purposes.

Enjoy playing Frogger - The Game! If you have any questions or suggestions, feel free to reach out.

Made with ❤️ by Richard Schoenmann
