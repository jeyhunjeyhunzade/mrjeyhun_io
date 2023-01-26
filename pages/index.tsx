import Link from 'next/link';
import { Text } from '@chakra-ui/react';

import Layout from 'components/Layout';

const IndexPage = () => (
    //TODO: add type system to theme
    <Layout title="Home | Next.js + TypeScript Example">
        <Text sx={{ color: 'yellow.500' }}>Hey, I am J</Text>
        <p>
            <Link href="/about">
                Contrary to popular belief, Lorem Ipsum is from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the{' '}
            </Link>
        </p>
    </Layout>
);

export default IndexPage;
