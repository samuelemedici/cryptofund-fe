import type { NextPage } from 'next';
import Input from '../components/shared/inputs/Input';
import { InputType } from '../utils/models/InputType';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Input type={InputType.PASSWORD} insertedValue={() => console.log("Test")} />
    </div>
  )
}

export default Home
