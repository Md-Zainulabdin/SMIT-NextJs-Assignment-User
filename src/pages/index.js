import { read } from "../../utils/handlers";

const Home = ({data}) => {
  console.log(data);
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <h1 className="text-2xl font-semibold">Home</h1>
    </div>
  )
}

export default Home;

export const  getServerSideProps = async () => {

  let data = read();
  console.log(data);

  return {
    props: {
      data
    }
  }
}