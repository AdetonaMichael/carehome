interface HeroProps {
  headline: string;
  subtext: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA: {
    label: string;
    href: string;
  };
}

export default function Hero({
  headline,
  subtext,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="min-h-[600px] md:min-h-[680px] bg-white flex items-center pt-6">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-semibold text-slate-950 leading-tight">
              {headline}
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
              {subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={primaryCTA.href}
                className="bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors text-center"
              >
                {primaryCTA.label}
              </a>
              <a
                href={secondaryCTA.href}
                className="border-2 border-slate-300 text-slate-950 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors text-center"
              >
                {secondaryCTA.label}
              </a>
            </div>
          </div>

          {/* Dashboard Mock */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-950 text-sm">Dashboard Overview</h3>
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Incident Tracking */}
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                  <div className="text-xs text-slate-600 mb-2 font-medium">Incidents</div>
                  <div className="text-2xl font-semibold text-slate-950">3</div>
                  <div className="text-xs text-slate-500 mt-1">This week</div>
                </div>

                {/* Care Overview */}
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                  <div className="text-xs text-slate-600 mb-2 font-medium">Care Plans</div>
                  <div className="text-2xl font-semibold text-slate-950">42</div>
                  <div className="text-xs text-slate-500 mt-1">Active</div>
                </div>

                {/* Alerts */}
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                  <div className="text-xs text-slate-600 mb-2 font-medium">Alerts</div>
                  <div className="text-2xl font-semibold text-slate-950">1</div>
                  <div className="text-xs text-slate-600 mt-1">Attention needed</div>
                </div>

                {/* Updates */}
                <div className="bg-slate-50 rounded-lg border border-slate-200 p-4">
                  <div className="text-xs text-slate-600 mb-2 font-medium">Updates</div>
                  <div className="text-2xl font-semibold text-slate-950">12</div>
                  <div className="text-xs text-slate-500 mt-1">Today</div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-4 mt-2">
                <div className="text-xs text-slate-600 mb-3 font-semibold">Recent Activity</div>
                <div className="space-y-2 text-xs">
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-slate-700">Documentation recorded</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-slate-700">Care plan updated</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="text-slate-700">Team notification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
