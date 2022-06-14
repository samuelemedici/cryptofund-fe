import type { NextPage } from 'next';
import Input from '../components/shared/inputs/Input';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen">
      <Input placeholder={'Testing Preloaded value'} prePopulatedValue="10" type={'number'} inputValue={(value) => console.log(value)} />
    </div>
  )
}

export default Home
