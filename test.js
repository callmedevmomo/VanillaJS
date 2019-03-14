function handleOnline() {
  console.log("hello!");
}
function handleOffline() {
  console.log("Bye Bye!");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);
