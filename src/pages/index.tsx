import { useEffect } from 'preact/hooks';
import Layout from '../layouts/Layout';
import { Counter } from '../global/CounterState';
import Button from '../components/Button';

export default function Home() {
  useEffect(() => {
    console.log('count changed to', Counter.value);
  }, [Counter.value]);

  return (
    <Layout>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <h1>Page 1</h1>
          <Button onClick={() => (Counter.value += 1)}>
            <>Count up</>
          </Button>
          <p className="text-3xl font-bold">{Counter.value}</p>
        </div>
      </div>
    </Layout>
  );
}
