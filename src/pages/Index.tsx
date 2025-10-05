import ChatBot from "@/components/ChatBot";
import { Code2, Zap, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <div className="bg-[image:var(--gradient-glow)] rounded-full p-4 animate-scale-in">
              <Code2 className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-[image:var(--gradient-primary)] bg-clip-text text-transparent animate-fade-in">
            Welcome to Our Hackathon Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            Build amazing projects, collaborate with talented developers, and compete for incredible prizes
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
            <p className="text-muted-foreground">Quick registration and seamless project submission</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
            <p className="text-muted-foreground">Connect with developers and build together</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-elevated)] transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Code2 className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Amazing Projects</h3>
            <p className="text-muted-foreground">Showcase your skills and win prizes</p>
          </div>
        </div>
      </div>

      {/* ChatBot */}
      <ChatBot />
    </div>
  );
};

export default Index;
