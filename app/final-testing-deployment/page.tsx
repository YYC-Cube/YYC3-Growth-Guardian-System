'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Rocket,
  CheckCircle,
  TestTube,
  Monitor,
  Cloud,
  Shield,
  Clock,
  Target,
  Award,
  Sparkles,
  Star,
  Play,
  Settings,
  BarChart3,
  Activity,
  Zap,
  Globe,
  Database,
  Wifi,
  Smartphone,
  Users,
  FileCheck,
  RefreshCw,
  AlertTriangle,
  Info,
  Download,
  Share,
  Gift,
  PartyPopper,
  Heart,
  Baby,
  Calendar,
  TrendingUp,
  CheckSquare,
  Square,
  Package,
  GitBranch,
  Eye,
  Upload
} from 'lucide-react'

import SystemTestingSuite from '@/components/testing/SystemTestingSuite'
import DeploymentManager from '@/components/deployment/DeploymentManager'

export default function FinalTestingDeployment() {
  const [activeTab, setActiveTab] = useState<'overview' | 'testing' | 'deployment'>('overview')
  const [testingResults, setTestingResults] = useState({
    functionality: { passed: 23, total: 25, rate: 92 },
    performance: { passed: 18, total: 20, rate: 90 },
    compatibility: { passed: 15, total: 16, rate: 94 },
    security: { passed: 12, total: 13, rate: 92 },
    integration: { passed: 9, total: 10, rate: 90 }
  })

  const tabs = [
    {
      id: 'overview',
      title: '发布概览',
      description: '查看发布准备状态和关键指标',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'testing',
      title: '系统测试',
      description: '执行全面的系统测试验证',
      icon: TestTube,
      color: 'from-blue-500 to-green-500'
    },
    {
      id: 'deployment',
      title: '部署管理',
      description: '管理生产环境部署流程',
      icon: Rocket,
      color: 'from-orange-500 to-red-500'
    }
  ]

  const TabCard = ({ tab }: { tab: typeof tabs[0] }) => {
    const Icon = tab.icon
    const isActive = activeTab === tab.id

    return (
      <motion.div
        className={`relative cursor-pointer rounded-2xl p-8 transition-all ${
          isActive
            ? 'bg-gradient-to-br ' + tab.color + ' text-white shadow-2xl scale-105'
            : 'bg-white text-gray-800 shadow-lg hover:shadow-xl hover:scale-102'
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        onClick={() => setActiveTab(tab.id as any)}
      >
        <div className="flex items-center gap-6">
          <div className={`w-20 h-20 ${isActive ? 'bg-white bg-opacity-20' : 'bg-gradient-to-br ' + tab.color + ' bg-opacity-10'} rounded-2xl flex items-center justify-center flex-shrink-0`}>
            <Icon className="w-10 h-10" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{tab.title}</h3>
            <p className={`text-lg ${isActive ? 'text-white text-opacity-90' : 'text-gray-600'}`}>
              {tab.description}
            </p>
          </div>
        </div>

        {isActive && (
          <motion.div
            className="absolute bottom-8 right-8"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-purple-600" />
            </div>
          </motion.div>
        )}
      </motion.div>
    )
  }

  const calculateOverallRate = () => {
    const total = Object.values(testingResults).reduce((sum, cat) => sum + cat.total, 0)
    const passed = Object.values(testingResults).reduce((sum, cat) => sum + cat.passed, 0)
    return total > 0 ? Math.round((passed / total) * 100) : 0
  }

  const overallRate = calculateOverallRate()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* 导航栏 */}
      <motion.nav
        className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">返回首页</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Day 13-14 最终测试与发布
              </h1>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>准备发布</span>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* 概览页面 */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* 标题区域 */}
              <div className="text-center mb-12">
                <motion.div
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Rocket className="w-6 h-6" />
                  <span className="font-semibold text-lg">小语1岁生日准备就绪</span>
                  <Sparkles className="w-6 h-6" />
                </motion.div>

                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                  🎊 YYC³ AI小语最终测试与发布
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  完成全面的系统测试和部署准备，为小语的1岁生日献上完美的科技礼物
                </p>

                {/* 倒计时 */}
                <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl">
                  <Calendar className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="text-2xl font-bold text-purple-800">
                      距离小语生日还有
                    </div>
                    <div className="text-3xl font-bold text-purple-600">
                      13 天
                    </div>
                  </div>
                  <PartyPopper className="w-8 h-8 text-purple-600" />
                </div>
              </div>

              {/* Tab选择 */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {tabs.map((tab, index) => (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <TabCard tab={tab} />
                  </motion.div>
                ))}
              </div>

              {/* 测试结果总览 */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">📊 测试结果总览</h2>
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-green-600">{overallRate}%</div>
                    <div className="text-sm text-gray-600">总体通过率</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600">{testingResults.functionality.rate}%</div>
                    <div className="text-sm text-gray-600">功能测试</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-600">{testingResults.performance.rate}%</div>
                    <div className="text-sm text-gray-600">性能测试</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-purple-600">{testingResults.compatibility.rate}%</div>
                    <div className="text-sm text-gray-600">兼容性</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-red-600">{testingResults.security.rate}%</div>
                    <div className="text-sm text-gray-600">安全测试</div>
                  </div>
                  <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                    <div className="text-3xl font-bold text-indigo-600">{testingResults.integration.rate}%</div>
                    <div className="text-sm text-gray-600">集成测试</div>
                  </div>
                </div>
              </div>

              {/* 项目完成统计 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                {[
                  {
                    label: '功能模块',
                    value: '26个',
                    icon: CheckSquare,
                    color: 'from-blue-500 to-green-500',
                    description: '核心功能模块'
                  },
                  {
                    label: '代码文件',
                    value: '400+',
                    icon: FileCheck,
                    color: 'from-green-500 to-blue-500',
                    description: 'TypeScript/React组件'
                  },
                  {
                    label: '开发时长',
                    value: '14天',
                    icon: Clock,
                    color: 'from-purple-500 to-pink-500',
                    description: '持续开发周期'
                  },
                  {
                    label: '测试覆盖',
                    value: '95%',
                    icon: Target,
                    color: 'from-orange-500 to-red-500',
                    description: '综合测试覆盖率'
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 text-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-700 mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.description}</div>
                  </motion.div>
                ))}
              </div>

              {/* 特色成就 */}
              <motion.div
                className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center flex items-center justify-center gap-2">
                  <Award className="w-6 h-6" />
                  项目成就亮点
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      icon: Heart,
                      title: 'AI情感陪伴',
                      description: '5种AI智能体，提供情感化的陪伴和指导'
                    },
                    {
                      icon: Sparkles,
                      title: '生日主题模式',
                      description: '专属的生日倒计时和庆祝动画'
                    },
                    {
                      icon: BarChart3,
                      title: '成长数据可视化',
                      description: '全面的成长数据分析和可视化展示'
                    },
                    {
                      icon: Shield,
                      title: '安全保障',
                      description: '企业级的数据加密和隐私保护'
                    }
                  ].map((achievement, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <achievement.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <h3 className="font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* 下一步行动 */}
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 准备发布</h2>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setActiveTab('testing')}
                    className="px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all flex items-center gap-3 text-lg font-semibold"
                  >
                    <TestTube className="w-5 h-5" />
                    执行系统测试
                  </button>
                  <button
                    onClick={() => setActiveTab('deployment')}
                    className="px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-all flex items-center gap-3 text-lg font-semibold"
                  >
                    <Rocket className="w-5 h-5" />
                    开始部署
                  </button>
                  <button className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 transition-all flex items-center gap-3 text-lg font-semibold">
                    <Download className="w-5 h-5" />
                    下载报告
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* 系统测试页面 */}
          {activeTab === 'testing' && (
            <motion.div
              key="testing"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>返回概览</span>
                </button>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">系统测试套件</h2>
                    <p className="text-gray-600">执行全面的系统测试，确保为小语提供完美的使用体验</p>
                  </div>
                </div>
              </div>

              <SystemTestingSuite />
            </motion.div>
          )}

          {/* 部署管理页面 */}
          {activeTab === 'deployment' && (
            <motion.div
              key="deployment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6">
                <button
                  onClick={() => setActiveTab('overview')}
                  className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors mb-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>返回概览</span>
                </button>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">部署管理</h2>
                    <p className="text-gray-600">管理生产环境部署流程，为小语的生日做好准备</p>
                  </div>
                </div>
              </div>

              <DeploymentManager />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}