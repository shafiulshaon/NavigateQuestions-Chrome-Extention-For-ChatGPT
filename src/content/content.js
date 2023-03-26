// Find the chat input box element
const inputBox = document.querySelector('[data-id="367e46d7-d020-4a24-8893-7d0440e981e4"]');

// Find the send button
const sendButton = document.querySelector('.flex.flex-row.gap-3.last\\:mb-2.md\\:mx-4.md\\:last\\:mb-6.lg\\:mx-auto.lg\\:max-w-3xl button[type="submit"]');

let questionNumber = 1;

//Injects a question number element after each question is submitted by the user
sendButton.addEventListener('click', () => {
  const questionElement = document.createElement('div');
  questionElement.className = 'question-number';
  questionElement.innerText = questionNumber++;
  inputBox.parentNode.insertBefore(questionElement, inputBox.nextSibling);

  //Update the question numbers for all existing question numbers whenever a new question is submitted
  const questionNumbers = document.querySelectorAll('.question-number');
  questionNumbers.forEach((numberElement, index) => {
    numberElement.innerText = index + 1;
  });
});

inputBox.addEventListener('input', () => {
  if (inputBox.value.trim() === '') {
    questionNumber = 1;
    document.querySelectorAll('.question-number').forEach(element => {
      element.remove();
    });
  }
});


// // Find the chat input box element
// const chatInput = document.querySelector('div[role="textbox"]');

// // Find all the existing chat messages
// const chatMessages = document.querySelectorAll('div[data-testid="incoming-message"]');

// // Loop through each chat message and add a question number
// chatMessages.forEach((message, index) => {
//   const questionNumber = index + 1;
//   const questionElement = document.createElement('div');
//   questionElement.textContent = questionNumber;
//   questionElement.classList.add('question-number');
//   message.prepend(questionElement);
// });
