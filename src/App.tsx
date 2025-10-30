import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DefinitionSection from "./components/DefinitionSection";
import GallerySection from "./components/GallerySection";
import HistorySection from "./components/HistorySection";
import StructureSection from "./components/StructureSection";
import CosmosSection from "./components/CosmosSection";
import ObservationSection from "./components/ObservationSection";
import GalaxyTypesSection from "./components/GalaxyTypesSection";
import ExamplesSection from "./components/ExamplesSection";
import FactsSection from "./components/FactsSection";
import QASection from "./components/QASection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <HeroSection />
      <DefinitionSection />
      <GallerySection />
      <HistorySection />
      <StructureSection />
      <CosmosSection />
      <ObservationSection />
      <GalaxyTypesSection />
      <ExamplesSection />
      <FactsSection />
      <QASection />
      <Footer />
    </div>
  );
}
