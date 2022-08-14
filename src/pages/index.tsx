import type { NextPage } from 'next';


const Home: NextPage = () => {
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    try {
      const code = data.get('code') as string;
      const result = eval(code);
      console.log('result', result);
      e.currentTarget.reset();
    } catch (e) {
      console.log('error', e);
    }
  }

  return <div>
    <form onSubmit={submit}>
      <input type="text" name='code' placeholder="Search" />
    </form>
  </div>;
};

export default Home;
