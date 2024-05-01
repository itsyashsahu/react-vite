import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen">
        <Header  />
        <HeroSection />
      </div>
    </>
  );
};


export default Dashboard;
