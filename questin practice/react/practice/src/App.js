import Greeting from "./greetings";
import HelloReact from "./helloReact";
import Counter from "./counter";
import ToggleContent from "./toggleContent";
import UserList from "./userList";
import BasicForm from "./basicForm";
import TimeGreeting from "./TimeGreeting";
function App() {
  return (
    <div>
      <HelloReact />
      <Greeting name="John" />
      <Counter />
      <ToggleContent />
      <UserList />
      <BasicForm />
      <TimeGreeting />
    </div>
  );
}

export default App;
