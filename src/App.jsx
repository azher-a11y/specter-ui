import React, { useState } from 'react';
import {
  Search, List as ListIcon, Database, Users, LineChart, PieChart,
  Layers, Settings, ChevronLeft, ChevronRight, Sparkles, Eye, Plus,
  UploadCloud, ExternalLink, Link, Globe, StickyNote,
  Network, Flag, Activity, Briefcase, Users2, Landmark, Building2,
  LifeBuoy, ArrowUpRight
} from 'lucide-react';

const Badge = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium border border-gray-200 bg-gray-50 text-gray-700 ${className}`}>
    {children}
  </span>
);

const Tag = ({ children, className = "" }) => (
  <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 ${className}`}>
    {children}
  </span>
);

const Button = ({ children, variant = "secondary", className = "", icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900";
  const variants = {
    primary: "text-white bg-gray-900 hover:bg-gray-800",
    secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {Icon && <Icon className="w-4 h-4 mr-2" />}
      {children}
    </button>
  );
};

const SidebarItem = ({ icon: Icon, label, active, count }) => (
  <a href="#" className={`flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${active ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
    <div className="flex items-center">
      <Icon className={`w-4 h-4 mr-3 ${active ? 'text-gray-900' : 'text-gray-400'}`} />
      {label}
    </div>
    {count && <span className="text-xs text-gray-400">{count}</span>}
  </a>
);

const SidebarSection = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{title}</h3>
    <div className="space-y-0.5">
      {children}
    </div>
  </div>
);

const Card = ({ title, children, className = "" }) => (
  <div className={`bg-white border border-gray-200 rounded-lg overflow-hidden ${className}`}>
    {title && (
      <div className="px-5 py-4 border-b border-gray-200 bg-gray-50/50">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      </div>
    )}
    <div className="p-5">
      {children}
    </div>
  </div>
);

const AwardTag = ({ children, isCnbc }) => (
  <a href="#" className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
    {!isCnbc ? (
      <div className="w-4 h-4 rounded-full flex items-center justify-center mr-2 bg-[#FF492C] text-white">
        <span className="text-[10px] font-bold">G</span>
      </div>
    ) : (
      <span className="text-[12px] mr-2">🦚</span>
    )}
    {children}
    <ArrowUpRight size={12} className="ml-1.5 text-gray-400" />
  </a>
);

const MedalCard = ({ season, year, title, subtitle, isLeader }) => (
  <div className="w-24 h-28 bg-white border border-gray-200 rounded-lg flex flex-col relative overflow-hidden group hover:border-gray-300 transition-colors cursor-pointer">
    <div className="flex justify-between items-center px-2 py-1.5 border-b border-gray-100">
      <span className="text-[7px] font-bold text-gray-800 uppercase tracking-wider">{season} {year}</span>
      <div className="w-3.5 h-3.5 bg-[#FF492C] rounded-sm flex items-center justify-center text-white text-[8px] font-bold">G</div>
    </div>
    <div className="flex-1 flex flex-col items-center justify-center p-2 relative z-10 bg-white">
      {subtitle && <span className="text-[7px] font-bold text-gray-800 uppercase mb-0.5 text-center leading-tight">{subtitle}</span>}
      <span className={`font-bold text-gray-900 text-center leading-tight ${subtitle ? 'text-xl' : 'text-sm'}`}>{title}</span>
      {subtitle && <span className="text-[5px] font-bold text-gray-500 uppercase mt-0.5 tracking-wider">Global Sellers</span>}
    </div>
    <div className="absolute bottom-0 left-0 w-full">
       <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6 drop-shadow-sm">
         <polygon points="0,0 50,24 100,0 100,24 0,24" fill="#FF492C" />
         <polygon points="2,0 50,21 98,0 98,24 2,24" fill="#F4D03F" />
         <polygon points="4,0 50,18 96,0 96,24 4,24" fill="#FFFFFF" />
       </svg>
    </div>
  </div>
);

const App = () => {
  const [activeTab, setActiveTab] = useState('Sector');

  const tabs = [
    'Overview', 'Sector', 'Financials', 'Team', 'Traction Metrics',
    'Reviews', 'News', 'Similar', 'Revenue Signals'
  ];

  return (
    <div className="flex h-screen bg-white text-gray-900 font-sans overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-[#fbfbfb] flex flex-col flex-shrink-0 hidden md:flex">
        <div className="h-14 flex items-center px-4 border-b border-gray-200">
          <div className="font-bold text-xl tracking-tight text-gray-900">specter</div>
        </div>

        <div className="p-3">
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Quick search"
              className="block w-full pl-9 pr-3 py-1.5 border border-gray-200 rounded-md leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
              <span className="text-gray-400 text-xs border border-gray-200 rounded px-1.5 py-0.5 bg-gray-50">⌘K</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-2 pb-4 scrollbar-hide">
          <SidebarSection title="My Workspace">
            <SidebarItem icon={Search} label="Searches" />
            <SidebarItem icon={ListIcon} label="Lists" />
            <SidebarItem icon={Briefcase} label="My CRM" />
            <SidebarItem icon={Network} label="My Network" />
          </SidebarSection>

          <SidebarSection title="Company">
            <SidebarItem icon={Database} label="Company DB" active />
          </SidebarSection>

          <SidebarSection title="People">
            <SidebarItem icon={Users2} label="People DB" />
            <SidebarItem icon={Activity} label="Talent Signals" />
          </SidebarSection>

          <SidebarSection title="Investors">
            <SidebarItem icon={Landmark} label="Investor DB" />
            <SidebarItem icon={LineChart} label="Interest Signals" />
          </SidebarSection>

          <SidebarSection title="Transactions">
            <SidebarItem icon={PieChart} label="Funding Rounds" />
            <SidebarItem icon={Building2} label="Acquisitions" />
          </SidebarSection>

          <SidebarSection title="Market">
            <SidebarItem icon={Layers} label="Landscapes" />
          </SidebarSection>
        </div>

        <div className="p-3 border-t border-gray-200 space-y-1">
          <SidebarItem icon={LifeBuoy} label="Support" />
          <a href="#" className="flex items-center px-3 py-2 mt-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
            <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mr-3">
              AH
            </div>
            Azher Hussain
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-white">

        {/* Top Header / Breadcrumbs */}
        <div className="h-12 border-b border-gray-100 flex items-center px-6 justify-between text-sm text-gray-500 bg-white">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="hover:bg-gray-100 p-1 rounded text-gray-400"><ChevronLeft size={16} /></button>
              <span className="font-medium text-gray-700">1 of 6M</span>
              <button className="hover:bg-gray-100 p-1 rounded text-gray-400"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-50">
          <div className="bg-white">
            <div className="max-w-6xl mx-auto w-full">

              {/* Company Profile Header */}
              <div className="px-8 pt-8 pb-6">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex gap-5">
                    <div className="w-20 h-20 rounded-xl bg-[#F4D03F] flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100">
                      <span className="text-4xl font-bold text-white">R</span>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Rippling</h1>
                        <Badge className="bg-white text-gray-700 border-gray-200 font-normal">April Rank: 778</Badge>
                      </div>

                      <p className="text-gray-600 text-sm max-w-2xl mb-3">
                        Rippling is a workforce management system that unifies HR, IT, and finance operations in one platform.
                      </p>

                      <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-4">
                        <Tag className="bg-white border border-gray-200 text-gray-600 font-normal py-0.5 px-2"><Globe size={12} className="mr-1 text-gray-400" /> San Francisco, US</Tag>
                        <Tag className="bg-white border border-gray-200 text-gray-600 font-normal py-0.5 px-2">Founded 2010</Tag>
                        <Tag className="bg-white border border-gray-200 text-gray-600 font-normal py-0.5 px-2">B2B</Tag>
                        <Tag className="bg-white border border-gray-200 text-gray-600 font-normal py-0.5 px-2">Late Stage</Tag>
                        <Tag className="bg-white border border-gray-200 text-gray-900 font-medium py-0.5 px-2">Total Funding: $2.4B</Tag>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex gap-2">
                          <a href="#" className="p-1.5 text-gray-400 hover:text-gray-600 bg-white rounded border border-gray-200"><Globe size={14} /></a>
                          <a href="#" className="p-1.5 text-gray-400 hover:text-blue-600 bg-white rounded border border-gray-200"><Link size={14} /></a>
                          <a href="#" className="p-1.5 text-gray-400 hover:text-gray-900 bg-white rounded border border-gray-200"><ExternalLink size={14} /></a>
                        </div>
                        <span className="text-xs text-gray-400">No connections</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Button icon={Eye}>Viewed</Button>
                    <Button icon={Plus}>Add to List</Button>
                    <Button icon={UploadCloud}>Push to Pipedrive</Button>
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-8 border-b border-gray-200">
                <nav className="flex space-x-6 overflow-x-auto scrollbar-hide">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`pb-3 text-sm font-medium whitespace-nowrap transition-colors relative ${
                        activeTab === tab
                          ? 'text-gray-900'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 rounded-t-full"></span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full">
            {/* Sector Content */}
            <div className="p-8 max-w-5xl">
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-5">Business Overview</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-8">
                    Rippling is a comprehensive workforce management platform that unifies HR, IT, and finance operations, built on a single source of truth for employee data. It offers a suite of integrated applications including HCM, Payroll, IT, and Spend management, designed to automate routine tasks and improve business execution. With over 500 app integrations, Rippling aims to provide businesses with a unified system to manage their entire workforce and operations efficiently. The company emphasizes its commitment to R&D and building a robust platform to address the fragmented nature of business operations. Rippling serves a wide range of industries and company sizes, from startups to enterprises, and supports global hiring and payroll across 185+ countries.
                  </p>

                  <div className="mt-8 border-l-2 border-gray-100">
                    {[
                      { label: 'Website', content: (
                        <Tag className="bg-white border border-gray-200 text-gray-700 gap-1">
                          rippling.com
                          <span className="text-blue-500">✓</span>
                        </Tag>
                      )},
                      { label: 'Linkedin', content: (
                        <Tag className="bg-white border border-gray-200 text-gray-700 font-bold px-2.5">in</Tag>
                      )},
                      { label: 'Status', content: (
                        <Badge className="bg-green-50 text-green-700 border-green-200">
                          <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 inline-block"></span>
                          Active
                        </Badge>
                      )},
                      { label: 'Growth Stage', content: <Tag>Late Stage</Tag> },
                      { label: 'Founded', content: <Tag>2016</Tag> },
                      { label: 'HQ', content: <Tag>San Francisco, US</Tag> },
                      { label: 'Employee Count', content: <span className="text-sm text-gray-800">1,449</span> },
                      { label: 'Business Model', content: <Tag>SaaS</Tag> },
                      { label: 'Industry', content: <Tag>Technology, Information and Internet › Software Development</Tag> },
                      { label: 'Tech Vertical', content: (
                        <div className="flex flex-wrap gap-2">
                          <Tag>Future of Work › Workforce Management, Scheduling and Time</Tag>
                          <Tag>Future of Work › HRIS and Core People Systems</Tag>
                          <Tag className="cursor-pointer hover:bg-gray-200 transition-colors">+5</Tag>
                        </div>
                      )},
                      { label: 'Tags', content: (
                        <div className="flex flex-wrap gap-2">
                          {['Workforce Management', 'HR', 'IT', 'Finance', 'Payroll', 'Global Payroll', 'Spend Management', 'Onboarding'].map(tag => (
                            <Badge key={tag} className="bg-gray-50 font-normal">{tag}</Badge>
                          ))}
                        </div>
                      )},
                    ].map((row, idx) => (
                      <div key={idx} className="flex items-start py-4 pl-6 border-b border-gray-100 last:border-b-0">
                        <div className="w-40 flex-shrink-0 text-sm text-gray-500 font-medium pt-0.5">{row.label}</div>
                        <div>{row.content}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* Customer Landscape */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-5">Customer Landscape</h3>
                  <div className="space-y-5">
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Customer Profile</h4>
                      <p className="text-sm text-gray-800">Companies managing HR, IT, and finance</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Customer Focus</h4>
                      <Badge>B2B</Badge>
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Reported Clients</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {['Andros', 'Y Combinator', 'Chess.com', 'Forterra', 'Highnoon', 'Clay', "Barry's"].map(client => (
                          <Tag key={client} className="bg-white border border-gray-200">{client}</Tag>
                        ))}
                      </div>
                      <Button variant="ghost" className="text-xs pl-0 text-blue-600 hover:text-blue-700 hover:bg-transparent font-medium">Explore similar companies →</Button>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* Product and Services */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-5">Product and Services</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Reported Traction</h4>
                      <p className="text-sm text-gray-800">
                        500+ App Integrations, 30K Employee Devices Managed, $35B Payroll Processed, 3x YOY Revenue Growth, 3,920 Global Employees
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-medium text-gray-500 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          'Phone/Mobile Compatible', 'Google Tag Manager', 'HSTS',
                          'Apple Mobile Web Clips Icon', 'Content Delivery Network',
                          'LetsEncrypt', 'Cloudflare', 'DNSSEC', 'Organization Schema'
                        ].map(tech => (
                          <span key={tech} className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded border border-gray-100">{tech}</span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 border border-gray-200 rounded-lg overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">Product</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {[
                            { name: 'Rippling HCM', desc: 'Drive business outcomes with the #1 rated HR solution.' },
                            { name: 'Rippling Payroll', desc: 'Pay employees and contractors your way.' },
                            { name: 'Rippling IT', desc: 'Strengthen security and eliminate busy work.' },
                            { name: 'Rippling Spend', desc: 'Get granular control over company spend.' },
                            { name: 'Global HRIS', desc: 'Run global HR in one place.' }
                          ].map((product, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                              <td className="px-4 py-3 font-medium text-gray-900">{product.name}</td>
                              <td className="px-4 py-3 text-gray-600">{product.desc}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* Awards and Certifications Integrated */}
                <div>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-sm font-medium text-gray-900">Awards (14)</span>
                        <div className="flex gap-1">
                          <button className="px-3 py-1 text-xs font-medium bg-white text-gray-900 rounded-md border border-gray-200 shadow-sm">2026</button>
                          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md transition-colors">2025</button>
                          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md transition-colors">2024</button>
                          <button className="px-3 py-1 text-xs font-medium text-gray-500 hover:text-gray-900 rounded-md transition-colors">2023</button>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <AwardTag>G2 Best Software Products</AwardTag>
                        <AwardTag>G2 Fastest Growing Products</AwardTag>
                        <AwardTag>G2 Highest Satisfaction Products</AwardTag>
                        <AwardTag isCnbc={true}>CNBC Disruptor 50</AwardTag>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-4 mt-8">
                         <span className="text-sm font-medium text-gray-900">Medals (2)</span>
                         <Badge className="bg-white border-gray-200 shadow-sm text-gray-600 px-3 py-1">Rank 6</Badge>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <MedalCard season="Winter" year="2026" title="Leader" isLeader={true} />
                        <MedalCard season="2025" subtitle="Best Software" title="Top 100" />
                      </div>
                    </div>

                    <div>
                      <div className="mb-3 mt-8">
                        <span className="text-sm font-medium text-gray-900">Certifications (3)</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Tag className="bg-white border border-gray-200 px-3 py-1.5 shadow-sm text-gray-600">SOC 2</Tag>
                        <Tag className="bg-white border border-gray-200 px-3 py-1.5 shadow-sm text-gray-600">GDPR</Tag>
                        <Tag className="bg-white border border-gray-200 px-3 py-1.5 shadow-sm text-gray-600">HIPAA</Tag>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Spacing */}
              <div className="h-12"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Right Action Sidebar */}
      <aside className="w-14 border-l border-gray-200 bg-white flex flex-col items-center py-4 flex-shrink-0 hidden lg:flex">
        <div className="space-y-4 w-full flex flex-col items-center">
          <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg group relative">
            <StickyNote size={18} />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Notes</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg group relative">
            <Network size={18} />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Network</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg group relative">
            <Flag size={18} />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Report</span>
          </button>
          <div className="w-8 border-t border-gray-200 my-2"></div>
          <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-lg group relative">
            <Activity size={18} />
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap">Activity</span>
          </button>
        </div>
      </aside>

    </div>
  );
};

export default App;
