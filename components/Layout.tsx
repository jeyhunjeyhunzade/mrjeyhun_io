import React, { ReactNode } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Grid, GridItem } from '@chakra-ui/react';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Grid
            templateAreas={`"header"
                  "main"
                  "footer"`}
            gridTemplateRows={'5.6rem auto 8.7rem'}
            // gridTemplateColumns={'150px 1fr'}
            h="100vh"
            gap="1"
            color="blackAlpha.700"
            fontWeight="bold"
        >
            <GridItem bg="orange.300" area={'header'}>
                Header
            </GridItem>
            <GridItem bg="green.300" area={'main'}>
                {children}
            </GridItem>
            <GridItem sx={{ bottom: '0' }} bg="blue.300" area={'footer'}>
                <span>I'm here to stay (Footer)</span>
            </GridItem>
        </Grid>
    </div>
);

export default Layout;
