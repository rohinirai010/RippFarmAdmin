import React, { useState, useEffect } from "react";
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  Users,
  RefreshCcw,
  Upload,
  DollarSign,
  TrendingUp,
  Gift,
  Activity,
  ChevronDown,
  Bell,
  Zap,
  BarChart2,
  Repeat,
  Copy,
  ThumbsUp,
  BarChart3,
  PlusCircle,
  UserCheck,
  FileText,
  Lock,
  Shield,
  MessageSquare,
  AlertCircle,
} from "lucide-react";
import aiBotImage from "../images/aiBotImg.png";
import dashboardLogo from "../images/loginlogo.png";
import {
  WalletCard,
  MetricCard,
  SocialCard,
  TeamInfoCard,
} from "../partials/dashboard/HelperComponents";
import {  FaTelegram } from "react-icons/fa";
import "../css/additional.css";
import { PiHandDepositDuotone, PiHandWithdrawDuotone } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { BsTwitter } from "react-icons/bs";
import {
  AlertCard,
  IncomeOverviewDashboard,
  LiveActivityFeed,
  PerformanceEngagementSection,
  SystemControlsCard,
  SystemSummaryCard,
  WithdrawalDepositStats,
} from "../partials/dashboard/Components";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarPosition, setSidebarPosition] = useState(() => {
    try {
      return localStorage.getItem("sidebar-position") || "left";
    } catch {
      return "left";
    }
  });

  // Interactive states
  const [activeTab, setActiveTab] = useState("open");
  const [showNotification, setShowNotification] = useState(false);
  const [aiActive, setAiActive] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [showCreateAccountFlow, setShowCreateAccountFlow] = useState(false);
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.accounts);
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);

  useEffect(() => {
    // Simulate fetching user data
    const fetchUserData = () => {
      const fetchedTotalUsers = 12458;  
      const fetchedActiveUsers = 3245; 
      const fetchedInactiveUsers = 92013; 

      setTotalUsers(fetchedTotalUsers);
      setActiveUsers(fetchedActiveUsers);
      setInactiveUsers(fetchedInactiveUsers);
    };

    fetchUserData();
  }, []);

  const handleCreateAccount = () => {
    setShowCreateAccountFlow(true);
  };

  // Animation for notification
  const handleCopyLink = () => {
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 2000);
  };

  const odlMetrics = {
    today: 0,
    weekly: 15,
    monthly: 17
  };

  const recentActivities = [
    {
      type: "registration",
      title: "New Registration",
      description: "Sarah Johnson completed registration",
      time: "2 minutes ago",
    },
    {
      type: "deposit",
      title: "New Deposit",
      description: "Robert Frost deposited $2,500 USDT",
      time: "8 minutes ago",
    },
    {
      type: "withdrawal",
      title: "Withdrawal Request",
      description: "Michael Chen requested $1,200 USDT withdrawal",
      time: "15 minutes ago",
    },
    {
      type: "admin",
      title: "Admin Action",
      description: "System maintenance scheduled for tonight",
      time: "1 hour ago",
    },
    {
      type: "support",
      title: "Support Ticket",
      description: "New support ticket #4582 created",
      time: "3 hours ago",
    },
  ];

  const salesData = {
    overview: {
      top: 0.06, // 6%
      sales_goals: 0.672, // 67.2%
      number_of_sales: 2608,
      change: 0.035, // 3.5%
      total_sales: 42200,
      total_change: -0.045, // 4.5%
    },
    performance: {
      history: [
        // Your performance history data here
        { percent: 0.8 },
        { percent: 0.2 },
        // ... rest of the data
      ],
    },
    convert_rate: 0.375,
    sales_target: {
      name: "Ann Thrax",
      vip: true,
      source: "TikTok Leads",
    },
  };

  // Generate performance history
  const historyPercents = [
    0.8, 0.2, 0.5, 0.2, 0.9, 0.3, 0.55, 0.3, 0.15, 0.8, 0.4,
  ];

  const today = new Date();
  salesData.performance.history = historyPercents.map((percent, index) => ({
    date: new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - (historyPercents.length - 1 - index)
    ),
    percent: percent,
  }));

  // Sample data from the images
  const dashboardData = {
    totalTeam: 17,
    totalReferrals: 2,
    totalDeposit: 0,
    totalWithdrawal: 0,
    earningWallet: 603.3,
    depositWallet: 0,
    todaysTeamDeposit: 0,
    teamBusiness: 0,
    totalProfit: 0,
    referralIncome: 0,
    ibId: "900015/Bampas",
    openPositions: 0,
    closedPositions: 0,
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarPosition={sidebarPosition}
        setSidebarPosition={setSidebarPosition}
      />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          sidebarPosition={sidebarPosition}
        />
        <main className="grow px-3 sm:px-6 py-6">
          <div className="max-w-full mx-auto">
            {/* Welcome Banner with animated background */}
            <div className="bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-6 mb-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mt-20 -mr-20 sm:w-32 sm:h-32 sm:-mt-12 sm:-mr-12"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -mb-16 -ml-16 sm:w-24 sm:h-24 sm:-mb-10 sm:-ml-10"></div>
                <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full sm:w-16 sm:h-16 sm:left-1/4 sm:top-1/3"></div>
                <div className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-white rounded-full sm:w-12 sm:h-12 sm:right-1/5 sm:bottom-1/4"></div>
              </div>

              <div className="relative flex flex-col sm:flex-row justify-between">
                <div>
                  <h1 className="text-xl font-bold mb-2 sm:text-3xl">
                    Welcome to Rippfarm Master Admin Dashboard
                  </h1>

                  <div className="mt-4 flex gap-3 flex-col sm:flex-row">
                    <button className="bg-white text-indigo-600 px-3  py-2 text-sm  rounded-lg font-medium hover:bg-opacity-90 transition flex items-center justify-center group w-full sm:w-auto cursor-pointer">
                      <DollarSign size={16} className="mr-2" />
                      <span className="group-hover:mr-1 transition-all">
                        Add Funds
                      </span>
                      <ArrowRight
                        size={14}
                        className="ml-1   transition-all duration-300"
                      />
                    </button>

                    <button className="bg-indigo-900 bg-opacity-40 text-white px-3  py-2 text-sm  rounded-lg font-medium hover:bg-opacity-60 transition flex items-center justify-center group border border-white border-opacity-30 w-full sm:w-auto cursor-pointer ">
                      <Upload size={16} className="mr-2" />
                      <span className="group-hover:mr-1 transition-all">
                        Deduct Funds
                      </span>
                      <ArrowRight size={14} className="ml-1  transition-all" />
                    </button>

                    <button
                      className=" text-indigo-600 bg-white dark:bg-indigo-900 bg-opacity-40 dark:text-white px-3 py-2 text-sm  rounded-lg font-medium hover:bg-opacity-60 transition flex items-center justify-center group border border-white border-opacity-30 w-full sm:w-auto cursor-pointer"
                      onClick={handleCreateAccount}
                    >
                      <PlusCircle size={16} className="mr-2" />
                      <span className="group-hover:mr-1 transition-all">
                        New Registration
                      </span>
                      <ArrowRight size={14} className="ml-1 transition-all" />
                    </button>
                  </div>
                </div>
                <div className="hidden sm:flex items-center mt-4 sm:mt-0">
                  <div className="bg-[#191d4e] p-3 rounded-xl text-indigo-600 shadow-lg transform hover:scale-105 transition-transform cursor-pointer">
                    <div className="relative">
                      <img
                        src={dashboardLogo}
                        alt="Dashboard Logo"
                        className="w-9 h-9"
                      />
                      <div className="absolute -top-4 -right-5 w-4 h-4 rounded-full bg-green-500 border-2 border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <MetricCard
                    title="Total Team"
                    value={dashboardData.totalTeam}
                    icon={<Users size={20} />}
                    category="team"
                    link="/my-downline"
                  />
                  <MetricCard
                    title="Total Referrals"
                    value={dashboardData.totalReferrals}
                    icon={<Gift size={20} />}
                    category="referrals"
                    link="/my-referrals"
                  />
                  <MetricCard
                    title="Total Deposit"
                    value={`$${dashboardData.totalDeposit.toLocaleString()}`}
                    icon={<PiHandDepositDuotone size={20} />}
                    category="deposit"
                    link="/deposit-history"
                  />
                  <MetricCard
                    title="Total Withdrawal"
                    value={`$${dashboardData.totalWithdrawal.toLocaleString()}`}
                    icon={<PiHandWithdrawDuotone size={20} />}
                    category="withdrawal"
                    link="/withdrawal-history"
                  />
                </div>

                {/* Donut Chart and Trading Data */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-3">
                  {/* Team Distribution Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-3 sm:p-6 shadow-lg border border-gray-200 dark:border-gray-800 transition-colors">
                    <div className="flex justify-between items-center sm:mb-4">
                      <h2 className="text-base font-medium text-gray-800 dark:text-white flex items-center">
                        <Users className="mr-2 text-violet-500" size={18} />
                        Team Distribution
                      </h2>
                      <div className="flex items-center text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                        <span className="mr-2 text-gray-700 dark:text-gray-300">
                          Last 30 days
                        </span>
                        <ChevronDown
                          size={14}
                          className="text-gray-500 dark:text-gray-400"
                        />
                      </div>
                    </div>

                    {/* Interactive donut chart container */}
                    <div className="relative h-48 flex items-center justify-center">
                      {/* Animated interactive donut */}
                      <div className="relative w-36 h-36">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          {/* Background track */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.91549430918954"
                            fill="transparent"
                            stroke="#e5e7eb"
                            strokeWidth="3.8"
                            className="dark:stroke-gray-700"
                          ></circle>

                          {/* Referrals segment - 12% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.91549430918954"
                            fill="transparent"
                            stroke="#3b82f6"
                            strokeWidth="3.8"
                            strokeDasharray="12 88"
                            strokeDashoffset="25"
                            className="transform -rotate-90 origin-center"
                            style={{
                              animation: "donutGrow 1.5s ease-out forwards",
                            }}
                          ></circle>

                          {/* Team segment - 88% */}
                          <circle
                            cx="18"
                            cy="18"
                            r="15.91549430918954"
                            fill="transparent"
                            stroke="#8b5cf6"
                            strokeWidth="3.8"
                            strokeDasharray="88 12"
                            strokeDashoffset="100"
                            className="transform -rotate-90 origin-center"
                            style={{
                              animation: "donutGrow 1.2s ease-out forwards",
                            }}
                          ></circle>
                        </svg>

                        {/* Center text with pulse animation */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center bg-white dark:bg-gray-900 rounded-full w-24 h-24 flex flex-col items-center justify-center transition-colors">
                            <div
                              className="text-3xl font-bold text-blue-600 dark:text-blue-400"
                              style={{ animation: "pulse 2s infinite" }}
                            >
                              17
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Total Members
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Legend - made more compact */}
                    <div className="flex justify-center space-x-8 mt-2">
                      <div className="flex items-center group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-violet-500 mr-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          Total Team (88%)
                        </span>
                      </div>
                      <div className="flex items-center group cursor-pointer">
                        <div className="w-3 h-3 rounded-full bg-blue-500 mr-2 group-hover:scale-125 transition-transform"></div>
                        <span className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                          Referrals (12%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Trading Summary Card */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl px-3 sm:px-4 py-4 shadow-lg border border-gray-200 dark:border-gray-800 transition-colors">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-base font-medium text-gray-800 dark:text-white flex items-center">
                        <BarChart3 className="mr-2 text-blue-500" size={18} />
                        Trading Summary
                      </h2>
                      <button
                        className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        onClick={() => console.log("Refresh data")}
                      >
                        <RefreshCcw size={14} className="hover:animate-spin" />
                      </button>
                    </div>

                    {/* Compact grid layout */}
                    <div className="grid grid-cols-2 gap-3">
                      {/* Today's Deposit Card */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Today's Deposit
                          </div>
                          <div className="p-1 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            <Activity
                              size={14}
                              className="text-blue-600 dark:text-blue-400"
                            />
                          </div>
                        </div>
                        <div className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
                          0{" "}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            USDT
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                          <TrendingUp size={10} className="mr-1" />
                          <span>+5.2% from yesterday</span>
                        </div>
                      </div>

                      {/* Total Deposit Card */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Total Deposit
                          </div>
                          <div className="p-1 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                            <BarChart2
                              size={14}
                              className="text-indigo-600 dark:text-indigo-400"
                            />
                          </div>
                        </div>
                        <div className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
                          0{" "}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            USDT
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-indigo-600 dark:text-indigo-400 flex items-center">
                          <Clock size={10} className="mr-1" />
                          <span>Account lifetime</span>
                        </div>
                      </div>

                      {/* Total Profit Card */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Total Profit
                          </div>
                          <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <TrendingUp
                              size={14}
                              className="text-green-600 dark:text-green-400"
                            />
                          </div>
                        </div>
                        <div className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
                          0{" "}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            USDT
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-green-600 dark:text-green-400 flex items-center">
                          <ArrowUpRight size={10} className="mr-1" />
                          <span>+12.3% this month</span>
                        </div>
                      </div>

                      {/* Referral Income Card */}
                      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-2 sm:p-3 hover:bg-gray-100 dark:hover:bg-gray-750 transition-all cursor-pointer border border-gray-200 dark:border-gray-700">
                        <div className="flex justify-between items-start">
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            Referral Income
                          </div>
                          <div className="p-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                            <Repeat
                              size={14}
                              className="text-purple-600 dark:text-purple-400"
                            />
                          </div>
                        </div>
                        <div className="text-lg font-bold mt-2 text-gray-900 dark:text-white">
                          0{" "}
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            USDT
                          </span>
                        </div>
                        <div className="mt-1 text-xs text-purple-600 dark:text-purple-400 flex items-center">
                          <Users size={10} className="mr-1" />
                          <span>17 team members</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="bg-gray-600 dark:bg-gray-900 rounded-lg p-3 sm:p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h2 className="text-white dark:text-gray-200 text-lg font-bold">
                          Connect with Community
                        </h2>
                        <p className="text-gray-400 dark:text-gray-500 text-xs">
                          Join thousands of members worldwide
                        </p>
                      </div>
                      <div className="bg-purple-600 dark:bg-purple-500 text-white dark:text-gray-800 text-xs font-medium px-2 sm:px-3 py-1 rounded-full">
                        Join us
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <SocialCard
                        title="Twitter"
                        icon={<BsTwitter className="w-5 h-5" />}
                        color="green"
                      />
                      <SocialCard
                        title="Telegram"
                        icon={<FaTelegram className="w-5 h-5" />}
                        color="blue"
                      />
                    </div>

                    <div className="text-center">
                      <p className="text-gray-400 dark:text-gray-500 text-xs">
                        Joining our community means you'll never miss important
                        updates
                      </p>
                    </div>
                  </div>

                  {/* Invite Panel */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-semibold">Invite Customer</h2>
                      {linkCopied && (
                        <div className="flex items-center text-green-500 text-sm">
                          <ThumbsUp size={14} className="mr-1" /> Copied!
                        </div>
                      )}
                    </div>
                    <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-sm mb-3 overflow-hidden text-ellipsis border border-gray-200 dark:border-gray-600">
                      http://bampasfx.com/m/join.aspx?spid=TOP
                    </div>
                    <button
                      className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md active:scale-95 transform transition-transform flex items-center justify-center"
                      onClick={handleCopyLink}
                    >
                      <Copy size={16} className="mr-2" />
                      Copy Referral Link
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-5">
                {/* AI Trading Bot */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${
                      aiActive
                        ? "from-green-500/40 to-blue-500/10"
                        : "from-gray-200 to-gray-300 dark:from-gray-700/20 dark:to-gray-700/20"
                    } transition-colors`}
                  ></div>

                  <div className="relative">
                    <div className="flex gap-8 sm:gap-10 items-center  mb-6">
                      <div className="relative w-[6rem] h-[6rem] bg-gray-600 dark:bg-[#101726] rounded-2xl">
                        <img
                          src={aiBotImage}
                          alt="AI Bot"
                          className="rounded-lg"
                        />
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            aiActive ? "bg-green-500" : "bg-gray-400"
                          }`}
                        ></div>
                      </div>

                      <div className="flex flex-col items-center gap-3">
                        <div className="ml-4">
                          <div className="text-sm text-gray-500">
                            {dashboardData.ibId}
                          </div>
                          <div
                            className={`text-xs mt-1 ${
                              aiActive ? "text-green-500" : "text-gray-400"
                            }`}
                          >
                            {aiActive
                              ? "AI Trading Active"
                              : "AI Trading Inactive"}
                          </div>
                        </div>
                        <button
                          className={`px-4 sm:px-8 py-2 rounded-lg font-medium transition-all shadow-sm hover:shadow-md active:scale-95 transform flex items-center cursor-pointer ${
                            aiActive
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "bg-indigo-600 hover:bg-indigo-700 text-white"
                          }`}
                          onClick={() => setAiActive(!aiActive)}
                        >
                          {aiActive ? "Stop AI" : "Start AI"}
                          <Zap size={16} className="ml-2" />
                        </button>
                      </div>
                    </div>

                    {aiActive && (
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800 text-sm text-green-700 dark:text-green-300 flex items-center">
                        <Activity size={16} className="mr-2 text-green-500" />
                        AI bot is analyzing market conditions...
                      </div>
                    )}
                  </div>
                </div>

                {/* Wallet Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <WalletCard
                    title="Deposit Wallet"
                    amount={dashboardData.depositWallet}
                    buttonText="Manage"
                  />
                  <WalletCard
                    title="Earning Wallet"
                    amount={dashboardData.earningWallet}
                    buttonText="Details"
                    secondButtonText="Withdraw"
                    isHighlighted={true}
                  />
                </div>

                {/* Team Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TeamInfoCard
                    title="Today's Team Deposit"
                    value={`$${dashboardData.todaysTeamDeposit}`}
                    subtitle="Updated just now"
                    icon={<Clock size={16} className="text-indigo-400" />}
                  />
                  <TeamInfoCard
                    title="Team Business"
                    value={`$${dashboardData.teamBusiness}`}
                    subtitle={`From ${dashboardData.totalTeam} team members`}
                    icon={<Users size={16} className="text-indigo-400" />}
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {/* System Summary Cards - First Row */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SystemSummaryCard 
        title="Total Users"
        value={totalUsers}
        icon={<Users size={20} className="text-indigo-600 dark:text-indigo-400" />}
        subtitle={
          <>
            <div className="text-xs text-green-500 dark:text-green-400">
              Active: {activeUsers} ({((activeUsers / totalUsers) * 100).toFixed(1)}%)
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Inactive: {inactiveUsers} ({((inactiveUsers / totalUsers) * 100).toFixed(1)}%)
            </div>
          </>
        }
      />

            

                <SystemSummaryCard
                  title="New Registrations Today"
                  value="86"
                  icon={
                    <UserCheck
                      size={20}
                      className="text-blue-600 dark:text-blue-400"
                    />
                  }
                  type="info"
                  subtitle="+12% from yesterday"
                />

                <SystemSummaryCard
                  title="Total Packages Activated"
                  value="9,876"
                  icon={
                    <FileText
                      size={20}
                      className="text-purple-600 dark:text-purple-400"
                    />
                  }
                  subtitle="79% activation rate"
                />

                <SystemSummaryCard
                  title="System Wallet Balance"
                  value="$1,245,890"
                  icon={
                    <DollarSign
                      size={20}
                      className="text-amber-600 dark:text-amber-400"
                    />
                  }
                  type="warning"
                  subtitle="USDT Balance"
                />
              </div>

              {/* Alert Cards - Second Row */}
              <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <AlertCard
      title="Missed ODL Accounts"
      color="amber"
      icon={<AlertCircle size={20} />}
      actionText="View Details"
      showMetrics={true}
      metrics={odlMetrics}
    />
                <AlertCard
                  title="Blocked Users"
                  count="3"
                  color="red"
                  icon={<Shield size={20} />}
                  actionText="View"
                />
                <AlertCard
                  title="Pending Withdrawals"
                  count="12"
                  color="blue"
                  icon={<DollarSign size={20} />}
                  actionText="Process"
                />
                <AlertCard
                  title="Support Tickets"
                  count="8"
                  color="green"
                  icon={<MessageSquare size={20} />}
                  actionText="Respond"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area - Dynamic Components */}
                <div className="lg:col-span-2 space-y-4">
                  <IncomeOverviewDashboard />
                  <WithdrawalDepositStats />
                  <PerformanceEngagementSection />
                </div>

                {/* Right Sidebar */}
                <div className="lg:col-span-1 space-y-3">
                  <SystemControlsCard />
                  <LiveActivityFeed activities={recentActivities} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Notification toast */}
      <div
        className={`fixed bottom-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center transition-all duration-300 transform ${
          showNotification
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <Bell size={20} className="text-indigo-600 mr-3" />
        <div>
          <div className="font-medium">New notification</div>
          <div className="text-sm text-gray-500">
            Your account has been updated
          </div>
        </div>
        <button
          className="ml-4 text-gray-400 hover:text-gray-600"
          onClick={() => setShowNotification(false)}
        >
          ×
        </button>
      </div>

    </div>
  );
};

export default Dashboard;
