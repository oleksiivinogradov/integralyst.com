import { Card, CardHeader, CardTitle } from "./ui/card";
import { OpenBranch } from "./OpenBranch";
import { Logo } from "./Logo";

export function BranchSelector() {
  const branches = [
    {
      code: "IL",
      name: "Israel",
      flag: "🇮🇱",
      path: "/il"
    },
    {
      code: "US",
      name: "United States",
      flag: "🇺🇸",
      path: "/us"
    },
    {
      code: "CH",
      name: "Switzerland",
      flag: "🇨🇭",
      path: "/ch"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Logo size="large" />
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Choose your region to get started
          </p>
        </div>

        <div className="branch-grid gap-8 max-w-5xl mx-auto">
          {branches.map((branch) => (
            <a 
              key={branch.code}
              href={branch.path}
              className="block transform transition-all hover:scale-105"
            >
              <Card className="text-center hover:shadow-2xl transition-all cursor-pointer border-2 hover:border-blue-300 h-full">
                <CardHeader className="space-y-4 py-12">
                  <div className="text-8xl mb-4">{branch.flag}</div>
                  <CardTitle className="text-2xl">{branch.name}</CardTitle>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">
                    {branch.code}
                  </div>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-16 text-gray-500">
          <p>Full-Cycle AI Consulting • Zero Upfront Investment</p>
        </div>
      </div>
      
      <div className="w-full">
        <OpenBranch />
      </div>
    </div>
  );
}