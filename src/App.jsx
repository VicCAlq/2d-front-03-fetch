
import Atv01UmItem from "./components/Atv01UmItem";
import Atv04TratarErrosDeMuitos from "./components/Atv04TratarErrosDeMuitos";

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#eec",
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "#101015"
  }
};

export default function App() {
  return (
    <div style={styles.container}>
      

      <Atv01UmItem></Atv01UmItem>
      <Atv04TratarErrosDeMuitos></Atv04TratarErrosDeMuitos>
    </div>

  );
}
