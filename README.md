# MyResume


Input
The program takes user input through a textarea in the ChatInterface component. The user types a message into this input field, which represents the content of the chat message to be processed. The message is then submitted via a Send button, triggering the program to send the input to a backend API.


Process
Once the user submits the input, the program sends an HTTP POST request to the backend API using the fetch function. The API processes the input and streams the response back to the client using Server-Sent Events (SSE). The program reads these chunks of streamed data, decodes them, and accumulates the results. If the response is marked as complete (done), the program stops streaming and updates its state.

Output
The processed response is displayed in the Response section of the user interface. This output is updated dynamically as the server streams data, providing the user with a real-time chat experience.

Reference: https://press.rebus.community/programmingfundamentals/chapter/input-process-output-model/
