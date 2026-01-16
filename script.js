Office.onReady(function () {
  document.getElementById("getSubjectBtn").onclick = getSubject;
});

function getSubject() {
  const item = Office.context.mailbox.item;
  document.getElementById("output").innerText =
    "Subject: " + item.subject;
}
