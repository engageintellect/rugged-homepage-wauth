
// IMPORTS
import { type NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
// import Link from "next/link";

// COMPONENTS
import Head from "next/head";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TeamSection from "../components/TeamSection";
import CardStack from "../components/CardStack";
import Footer from "../components/Footer";
import CallOut from "../components/CallOut";
import Contribute from "../components/CallToAction";
import HeroCards from "../components/HeroCards";
import CallToAction from "../components/CallToAction";



const Home: NextPage = (props) => {
  const trpcMessage = trpc.api.alert.useQuery(
		{
			title: "Alert:",
			msg: "This is an alert, driven by tRPC.",
		}

	);

  return (
    <>
      <Head>
        <title>App Name</title>
        <meta name="description" content="Generated by T3D" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-neutral-800">
				<Alert 
          title={trpcMessage.data?.title ?? 'loading...'} 
          msg={trpcMessage.data?.msg} 
        />
				<Navbar />
        <Hero
          title="Titlei"
          description="A modern tech stack for building fast."
        />
				<HeroCards/>
				<TeamSection/>
      </div>
			<CardStack />
      <CallToAction/>
			<Footer />
    </>
  );
};

export default Home;



const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => signOut() : () => signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
};