import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <div className="flex flex-col items-center p-8">
        <img src="https://placeimg.com/640/480/any" alt="Profile Image" className="w-48 h-48 rounded-full mb-4" />
        <h1 className="text-2xl font-bold mb-2">User Profile</h1>
        <p className="text-lg mb-8">User ID: {id}</p>
        <div className="text-center leading-6 max-w-md">
          <p className="mb-4">Email: john.doe@example.com</p>
          <p className="mb-4">Location: New York, NY</p>
          <p>Bio: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </Layout>
  );
}