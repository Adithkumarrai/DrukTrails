import { useState, useEffect } from "react";
import { 
  X, ShieldCheck, Mail, Calendar, Users, Sliders, Briefcase, 
  Trash2, CheckCircle, Archive, RotateCcw, DollarSign, Filter,
  Layers, BarChart2, TrendingUp, Sparkles, Compass
} from "lucide-react";
import { Inquiry } from "../types";

interface AdminConsoleProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminConsole({ isOpen, onClose }: AdminConsoleProps) {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [inquiryCount, setInquiryCount] = useState<number>(0);

  // Load and initialize demo data if empty
  const loadInquiries = () => {
    const localData = localStorage.getItem("druktrails_inquiries");
    if (localData) {
      try {
        const parsed = JSON.parse(localData) as Inquiry[];
        setInquiries(parsed);
        // Default select first item if present
        if (parsed.length > 0 && !selectedInquiry) {
          setSelectedInquiry(parsed[0]);
        }
      } catch (err) {
        initializeSampleData();
      }
    } else {
      initializeSampleData();
    }
  };

  const initializeSampleData = () => {
    const samples: Inquiry[] = [
      {
        id: "INQ-240581",
        email: "adithrai423@gmail.com",
        date: "Jun 22, 2026, 05:42 PM",
        duration: 7,
        budget: "mid-range",
        selectedInterests: ["culture", "photography"],
        month: "October",
        groupSize: 2,
        itineraryTitle: "Custom 7-Day Bhutanese Culture & Photography Odyssey",
        pricingEstimate: "$4,820",
        status: "new"
      },
      {
        id: "INQ-783109",
        email: "tours.expeditor@london-tours.co.uk",
        date: "Jun 20, 2026, 11:15 AM",
        duration: 10,
        budget: "luxury",
        selectedInterests: ["trekking", "wildlife"],
        month: "April",
        groupSize: 4,
        itineraryTitle: "Bespoke 10-Day High-Alt Alpine & Royal Orchid Expedition",
        pricingEstimate: "$15,640",
        status: "reviewed"
      },
      {
        id: "INQ-114092",
        email: "mindful.wanderer@gmail.com",
        date: "Jun 18, 2026, 09:04 AM",
        duration: 5,
        budget: "budget",
        selectedInterests: ["culture", "festivals"],
        month: "November",
        groupSize: 1,
        itineraryTitle: "Express 5-Day Gateway Sacred Paro Festivals Odyssey",
        pricingEstimate: "$1,950",
        status: "archived"
      }
    ];
    localStorage.setItem("druktrails_inquiries", JSON.stringify(samples));
    setInquiries(samples);
    setSelectedInquiry(samples[0]);
  };

  useEffect(() => {
    if (isOpen) {
      loadInquiries();
    }

    // Listen to custom event dispatched when a user submits a new inquiry live
    const handleNewInquiry = () => {
      loadInquiries();
    };

    window.addEventListener("druktrails_new_inquiry", handleNewInquiry);
    return () => {
      window.removeEventListener("druktrails_new_inquiry", handleNewInquiry);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Stats calculation
  const totalInquiries = inquiries.length;
  
  const estimatedPipeline = inquiries.reduce((sum, inq) => {
    const val = parseInt(inq.pricingEstimate.replace(/[^0-9]/g, "")) || 0;
    return sum + val;
  }, 0);

  const averageDuration = Math.round(
    inquiries.reduce((sum, inq) => sum + inq.duration, 0) / (totalInquiries || 1)
  );

  const newCount = inquiries.filter(i => i.status === "new").length;

  // Actions
  const updateStatus = (id: string, newStatus: "new" | "reviewed" | "archived") => {
    const updated = inquiries.map(inq => {
      if (inq.id === id) {
        const item = { ...inq, status: newStatus };
        if (selectedInquiry?.id === id) {
          setSelectedInquiry(item);
        }
        return item;
      }
      return inq;
    });
    localStorage.setItem("druktrails_inquiries", JSON.stringify(updated));
    setInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter(inq => inq.id !== id);
    localStorage.setItem("druktrails_inquiries", JSON.stringify(updated));
    setInquiries(updated);
    if (selectedInquiry?.id === id) {
      setSelectedInquiry(updated.length > 0 ? updated[0] : null);
    }
  };

  const resetAllData = () => {
    if (window.confirm("Are you sure you want to restore original sample inquiries list?")) {
      initializeSampleData();
    }
  };

  // Filter list
  const filteredInquiries = inquiries.filter(inq => {
    if (filterStatus === "all") return true;
    return inq.status === filterStatus;
  });

  return (
    <div className="fixed inset-0 bg-[#070b08]/85 backdrop-blur-md z-100 flex items-center justify-center p-4 md:p-6 transition-all duration-300">
      <div className="bg-white dark:bg-[#0c120e] w-full max-w-6xl h-[90vh] rounded-3xl border border-gray-200 dark:border-green-950/30 overflow-hidden shadow-2xl flex flex-col">
        
        {/* Header Dashboard section */}
        <div className="p-6 border-b border-gray-100 dark:border-green-950/10 bg-off-white dark:bg-[#121c15] flex justify-between items-center shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-forest-green dark:bg-bhutan-gold rounded-xl flex items-center justify-center text-white dark:text-[#0c120e]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-xl font-bold text-forest-green dark:text-white">Admin Hub & Inquiries Ledger</h2>
                <span className="hidden sm:inline-block bg-bhutan-gold/15 text-bhutan-gold text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Secure Local Console</span>
              </div>
              <p className="text-xs text-stone-gray dark:text-gray-400">Review, manage, and audit customized flight quotations and permit requests.</p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full border border-gray-200 dark:border-green-950/20 text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-green-950/20 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stats strip - Bento Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 bg-gray-50/50 dark:bg-green-950/5 border-b border-gray-100 dark:border-green-950/10 shrink-0">
          
          <div className="bg-white dark:bg-[#121c15] p-4 rounded-xl border border-gray-100 dark:border-green-950/15 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 bg-bhutan-gold/10 text-bhutan-gold rounded-lg flex items-center justify-center">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-stone-gray dark:text-gray-400 font-semibold uppercase tracking-wider block">Total Proposals</span>
              <span className="text-xl font-serif font-bold text-forest-green dark:text-white">{totalInquiries}</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#121c15] p-4 rounded-xl border border-gray-100 dark:border-green-950/15 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 bg-green-500/10 text-green-500 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] text-stone-gray dark:text-gray-400 font-semibold uppercase tracking-wider block">Pipeline Est</span>
              <span className="text-xl font-serif font-bold text-forest-green dark:text-white">
                {estimatedPipeline.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#121c15] p-4 rounded-xl border border-gray-100 dark:border-green-950/15 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 bg-blue-500/10 text-blue-500 rounded-lg flex items-center justify-center">
              <Calendar className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] text-stone-gray dark:text-gray-400 font-semibold uppercase tracking-wider block">Avg Duration</span>
              <span className="text-xl font-serif font-bold text-forest-green dark:text-white">{averageDuration} Days</span>
            </div>
          </div>

          <div className="bg-white dark:bg-[#121c15] p-4 rounded-xl border border-gray-100 dark:border-green-950/15 flex items-center gap-3.5 shadow-xs">
            <div className="w-10 h-10 bg-red-500/10 text-red-500 rounded-lg flex items-center justify-center">
              <Sparkles className="w-4.5 h-4.5" />
            </div>
            <div>
              <span className="text-[10px] text-stone-gray dark:text-gray-400 font-semibold uppercase tracking-wider block">Attention Needed</span>
              <span className="text-xl font-serif font-bold text-red-500">{newCount} New</span>
            </div>
          </div>

        </div>

        {/* Workspace Dual Panel Section */}
        <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
          
          {/* Left: inquiries list */}
          <div className="w-full md:w-1/2 lg:w-3/5 border-r border-gray-100 dark:border-green-950/10 flex flex-col h-full bg-white dark:bg-[#0c120e]">
            
            {/* Filter controls */}
            <div className="p-4 border-b border-gray-100 dark:border-green-950/10 bg-gray-50/50 dark:bg-[#121c15]/20 flex justify-between items-center gap-4 shrink-0">
              <div className="flex items-center gap-2">
                <Filter className="w-3.5 h-3.5 text-bhutan-gold" />
                <span className="text-xs font-semibold text-forest-green dark:text-gray-300">Filter Inquiries</span>
              </div>
              
              <div className="flex gap-1.5">
                {[
                  { id: "all", label: "All Cases" },
                  { id: "new", label: "New" },
                  { id: "reviewed", label: "Reviewed" },
                  { id: "archived", label: "Archived" }
                ].map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setFilterStatus(opt.id)}
                    className={`px-2.5 py-1 rounded text-[11px] font-bold transition-all cursor-pointer ${
                      filterStatus === opt.id 
                        ? "bg-forest-green text-white dark:bg-bhutan-gold dark:text-[#0c120e] shadow-xs"
                        : "bg-gray-100 dark:bg-green-950/10 text-stone-gray dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-green-950/20"
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* List entries */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {filteredInquiries.length === 0 ? (
                <div className="py-16 text-center">
                  <Mail className="w-12 h-12 text-gray-300 dark:text-green-950/20 mx-auto mb-3" />
                  <p className="text-sm font-medium text-forest-green dark:text-gray-300">No matching inquiries found</p>
                  <p className="text-xs text-stone-gray dark:text-gray-400 mt-1 max-w-xs mx-auto">Either submit a travel quote draft from the main page, or click Reset sample inquiries below.</p>
                </div>
              ) : (
                filteredInquiries.map((inq) => {
                  const isSelected = selectedInquiry?.id === inq.id;
                  let statusColor = "bg-red-500/10 text-red-600 border-red-500/20";
                  if (inq.status === "reviewed") statusColor = "bg-green-500/10 text-green-600 border-green-500/20";
                  if (inq.status === "archived") statusColor = "bg-gray-500/10 text-gray-500 border-gray-500/20";

                  return (
                    <div
                      key={inq.id}
                      onClick={() => setSelectedInquiry(inq)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected 
                          ? "bg-[#F9F6EF] dark:bg-[#17251c] border-bhutan-gold ring-1 ring-bhutan-gold/20 shadow-md" 
                          : "bg-white dark:bg-[#121c15] border-gray-100 dark:border-green-950/10 hover:border-gray-300 dark:hover:border-green-950/30"
                      }`}
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-stone-gray dark:text-gray-400 font-mono block">{inq.id} • {inq.date}</span>
                          <span className="font-semibold text-forest-green dark:text-white text-sm block truncate max-w-[280px] md:max-w-xs">{inq.email}</span>
                          <span className="text-xs text-stone-gray dark:text-gray-300 block line-clamp-1">{inq.itineraryTitle}</span>
                        </div>
                        <span className={`text-[9px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border ${statusColor} shrink-0`}>
                          {inq.status}
                        </span>
                      </div>

                      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-green-950/15 flex justify-between items-center text-xs">
                        <span className="text-stone-gray dark:text-gray-400">
                          {inq.duration}d • {inq.groupSize} Guests • {inq.budget.toUpperCase()}
                        </span>
                        <span className="font-serif font-extrabold text-bhutan-gold">{inq.pricingEstimate}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Panel footer operations */}
            <div className="p-4 border-t border-gray-100 dark:border-green-950/10 bg-off-white dark:bg-[#121c15] shrink-0 flex justify-between items-center text-xs text-stone-gray dark:text-gray-400">
              <span>Showing {filteredInquiries.length} of {totalInquiries} records</span>
              <button 
                onClick={resetAllData}
                className="flex items-center gap-1 hover:text-forest-green dark:hover:text-bhutan-gold font-semibold transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 animate-spin-reverse" />
                Reload Original Demo entries
              </button>
            </div>

          </div>

          {/* Right: Selected Inquiry Detail Panel */}
          <div className="w-full md:w-1/2 lg:w-2/5 overflow-y-auto p-6 bg-off-white/50 dark:bg-[#070b08]/30 flex flex-col h-full justify-between">
            {selectedInquiry ? (
              <div className="space-y-6 flex-1 flex flex-col justify-between">
                
                <div className="space-y-5">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono bg-white dark:bg-[#121c15] border border-gray-200 dark:border-green-950/20 px-3 py-1 rounded-md text-stone-gray dark:text-gray-300 font-bold">
                      {selectedInquiry.id}
                    </span>
                    
                    {/* Quick status actions */}
                    <div className="flex items-center gap-1.5">
                      {selectedInquiry.status !== "reviewed" && (
                        <button
                          onClick={() => updateStatus(selectedInquiry.id, "reviewed")}
                          title="Mark Reviewed"
                          className="p-1 px-2.5 bg-green-500/10 hover:bg-green-500 text-green-600 hover:text-white border border-green-500/20 text-[10px] font-bold rounded-md transition-all cursor-pointer flex items-center gap-1"
                        >
                          <CheckCircle className="w-3 h-3" /> Approve
                        </button>
                      )}
                      
                      {selectedInquiry.status !== "archived" && (
                        <button
                          onClick={() => updateStatus(selectedInquiry.id, "archived")}
                          title="Archive"
                          className="p-1.5 bg-gray-100 dark:bg-green-950/10 hover:bg-gray-200 dark:hover:bg-green-950/20 text-stone-gray hover:text-forest-green dark:hover:text-bhutan-gold border border-transparent rounded-md transition-all cursor-pointer"
                        >
                          <Archive className="w-3.5 h-3.5" />
                        </button>
                      )}

                      <button
                        onClick={() => deleteInquiry(selectedInquiry.id)}
                        title="Delete Inquiry permanently"
                        className="p-1.5 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white rounded-md transition-all cursor-pointer border border-red-500/20"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-bold text-bhutan-gold">Customer Contact Email</span>
                    <h3 className="font-serif text-lg font-bold text-forest-green dark:text-white flex items-center gap-2 mt-0.5">
                      <Mail className="w-4 h-4 text-forest-green dark:text-bhutan-gold shrink-0" />
                      <a href={`mailto:${selectedInquiry.email}`} className="hover:underline break-all">{selectedInquiry.email}</a>
                    </h3>
                    <span className="text-[11px] text-stone-gray dark:text-gray-400 block mt-1">Proposal timestamp: {selectedInquiry.date}</span>
                  </div>

                  {/* Pricing Bento */}
                  <div className="bg-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 p-5 rounded-2xl shadow-xs">
                    <span className="text-[10px] text-stone-gray dark:text-gray-400 uppercase tracking-wider font-bold block">Consolidated Tour Quote</span>
                    <span className="text-3xl font-serif font-black text-bhutan-gold block mt-1">{selectedInquiry.pricingEstimate}</span>
                    <span className="text-[9px] text-stone-gray dark:text-gray-400 block mt-1.5 border-t border-gray-100 dark:border-green-950/10 pt-1.5">Includes GNH SDF sustainable taxes, premium local logistics, certified mountain trail guides, and comfortable boutique lodging of preference.</span>
                  </div>

                  {/* Details matrix */}
                  <div className="bg-white dark:bg-[#121c15] border border-gray-100 dark:border-green-950/20 p-4 rounded-xl space-y-3.5 text-xs">
                    
                    <div className="flex justify-between border-b border-gray-100 dark:border-green-950/10 pb-2">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Bespoke Title:</span>
                      <span className="font-semibold text-forest-green dark:text-white text-right max-w-[180px]">{selectedInquiry.itineraryTitle}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 dark:border-green-950/10 pb-2">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Desired Travel Month:</span>
                      <span className="font-semibold text-forest-green dark:text-white">{selectedInquiry.month}</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 dark:border-green-950/10 pb-2">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Trip Duration:</span>
                      <span className="font-semibold text-forest-green dark:text-white">{selectedInquiry.duration} Days</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 dark:border-green-950/10 pb-2">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Group Size:</span>
                      <span className="font-semibold text-forest-green dark:text-white">{selectedInquiry.groupSize} Guest(s)</span>
                    </div>

                    <div className="flex justify-between border-b border-gray-100 dark:border-green-950/10 pb-2">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Comfort tier style:</span>
                      <span className="font-semibold text-forest-green dark:text-white capitalize">{selectedInquiry.budget}</span>
                    </div>

                    <div className="flex justify-between flex-col gap-1">
                      <span className="text-stone-gray dark:text-gray-400 font-medium">Custom Interests Selected:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {selectedInquiry.selectedInterests.length === 0 ? (
                          <span className="text-[10px] bg-gray-100 dark:bg-green-950/10 px-2 py-0.5 rounded text-gray-400">None Specified</span>
                        ) : (
                          selectedInquiry.selectedInterests.map(int => (
                            <span 
                              key={int}
                              className="text-[10px] bg-bhutan-gold/10 text-bhutan-gold px-2.5 py-0.5 rounded font-semibold uppercase tracking-wider border border-bhutan-gold/25"
                            >
                              {int}
                            </span>
                          ))
                        )}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200 dark:border-green-950/25 flex flex-col gap-2.5 justify-end shrink-0">
                  <div className="flex gap-2 text-xs">
                    {selectedInquiry.status !== "new" && (
                      <button 
                        onClick={() => updateStatus(selectedInquiry.id, "new")} 
                        className="flex-1 py-2.5 bg-gray-100 dark:bg-green-950/15 text-stone-gray text-center font-bold rounded-lg border border-transparent hover:border-gray-200 cursor-pointer"
                      >
                        Reset to Unreviewed
                      </button>
                    )}
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=HimalayanTrails Bhutan Travel Proposal Review (${selectedInquiry.id})&body=Hello! Thank you for requesting a custom trek itinerary under proposal reference number ${selectedInquiry.id}. We are ready to secure your high-value permit...`}
                      className="flex-1 py-2.5 bg-bhutan-gold hover:bg-bhutan-gold-light text-[#0c120e] text-center font-sans font-bold rounded-lg flex items-center justify-center gap-1 shadow-sm hover:shadow-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" /> Dispatch Email Reply
                    </a>
                  </div>
                </div>

              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <Compass className="w-16 h-16 text-gray-300 dark:text-green-950/20 mb-3 animate-spin-slow" />
                <p className="text-forest-green dark:text-white font-serif font-semibold text-base">No selection made</p>
                <p className="text-xs text-stone-gray dark:text-gray-400 mt-1">Please select an inquiry from the left index panel to view granular specifics.</p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
