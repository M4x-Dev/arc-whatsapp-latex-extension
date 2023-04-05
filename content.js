/* This runs after a web page loads */
console.log("Custom boost has been invoked");
console.log("Hello World from WebStorm");

setTimeout(() => {
  document.querySelectorAll("[data-testid='msg-container']").forEach(messageContainer => {
    Array.from(messageContainer.children).forEach(messageChild => {
      messageChild.classList.forEach(classElement => {
        if (classElement.toString().length == 5) {
          Array.from(messageChild.children).forEach(innerClassElement => {
            Array.from(innerClassElement.children).forEach(chatElement => {
              if (chatElement.classList.contains("copyable-text")) {
                console.log("Message found");
                chatElement.getElements
              }
            });
          });
        }
      });
    });
  });
}, 7000);