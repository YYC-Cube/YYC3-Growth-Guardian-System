/**
 * @fileoverview YYC³ 数据分析模块类型定义
 * @description 定义数据分析仪表板所需的数据结构和接口
 * @author YYC³
 * @version 1.0.0
 * @created 2025-01-30
 * @modified 2025-01-30
 * @copyright Copyright (c) 2025 YYC³
 * @license MIT
 */

// 实时指标数据结构
export interface RealtimeMetrics {
  // 用户指标
  activeUsers: number
  totalUsers: number
  newUsers: number
  userRetentionRate: number
  
  // AI交互指标
  aiConversations: number
  averageResponseTime: number
  averageSatisfaction: number
  
  // 系统性能指标
  systemHealth: number
  responseTime: number
  throughput: number
  errorRate: number
  
  // 业务指标
  sessionDuration: number
  pageViews: number
  bounceRate: number
  conversionRate: number
  
  // 异常检测
  anomalies: AnomalyData[]
  
  // 时间戳
  timestamp: string
  lastUpdated: string
}

// 异常数据结构
export interface AnomalyData {
  id: string
  type: 'performance' | 'user_behavior' | 'system_error' | 'business_metric'
  severity: 'low' | 'medium' | 'high' | 'critical'
  title: string
  description: string
  metric: string
  expectedValue: number
  actualValue: number
  deviation: number
  timestamp: string
  status: 'active' | 'resolved' | 'investigating'
  affectedComponents?: string[]
  recommendedActions?: string[]
}

// 业务洞察数据结构
export interface BusinessInsights {
  // 用户行为洞察
  userBehaviorInsights: UserBehaviorInsight[]
  
  // 性能洞察
  performanceInsights: PerformanceInsight[]
  
  // 业务趋势洞察
  businessTrends: BusinessTrend[]
  
  // AI模型洞察
  aiModelInsights: AIModelInsight[]
  
  // 推荐行动
  recommendedActions: RecommendedAction[]
  
  // 生成时间
  generatedAt: string
  validityPeriod: number // 小时
}

// 用户行为洞察
export interface UserBehaviorInsight {
  id: string
  category: 'engagement' | 'retention' | 'conversion' | 'satisfaction'
  title: string
  description: string
  impact: 'positive' | 'negative' | 'neutral'
  confidence: number // 0-1
  supportingData: {
    metric: string
    value: number
    change: number
    period: string
  }[]
  recommendations: string[]
}

// 性能洞察
export interface PerformanceInsight {
  id: string
  category: 'response_time' | 'throughput' | 'availability' | 'resource_usage'
  title: string
  description: string
  severity: 'info' | 'warning' | 'error' | 'critical'
  metrics: {
    name: string
    current: number
    baseline: number
    threshold: number
    unit: string
  }[]
  rootCause?: string
  suggestedFixes: string[]
}

// 业务趋势
export interface BusinessTrend {
  id: string
  name: string
  description: string
  direction: 'increasing' | 'decreasing' | 'stable' | 'volatile'
  strength: number // 0-1
  period: string
  dataPoints: {
    timestamp: string
    value: number
  }[]
  factors: string[]
  implications: string[]
}

// AI模型洞察
export interface AIModelInsight {
  id: string
  model: string
  version: string
  category: 'accuracy' | 'performance' | 'usage' | 'cost'
  title: string
  description: string
  metrics: {
    name: string
    value: number
    benchmark: number
    unit: string
  }[]
  drift: {
    detected: boolean
    confidence: number
    affectedFeatures: string[]
  }
  recommendations: string[]
}

// 推荐行动
export interface RecommendedAction {
  id: string
  priority: 'low' | 'medium' | 'high' | 'urgent'
  category: 'performance' | 'user_experience' | 'business' | 'technical'
  title: string
  description: string
  expectedImpact: string
  effort: 'low' | 'medium' | 'high'
  timeline: string
  dependencies?: string[]
  steps: {
    title: string
    description: string
    completed: boolean
  }[]
}

// 实时活动数据
export interface RealtimeActivity {
  id: string
  type: 'user_action' | 'system_event' | 'ai_interaction' | 'business_event'
  timestamp: string
  userId?: string
  sessionId?: string
  description: string
  details: Record<string, any>
  impact: 'low' | 'medium' | 'high'
  metadata?: {
    ip?: string
    userAgent?: string
    location?: string
    device?: string
  }
}

// 趋势图表数据
export interface TrendChartData {
  id: string
  name: string
  type: 'line' | 'bar' | 'area' | 'pie'
  data: {
    timestamp: string
    value: number
    label?: string
  }[]
  metadata: {
    unit: string
    color: string
    aggregation: 'sum' | 'average' | 'count' | 'max' | 'min'
  }
}

// WebSocket消息类型
export interface WebSocketMessage {
  type: 'realtime_metrics' | 'business_insights' | 'event_update' | 'alert'
  payload: any
  timestamp: string
  id: string
}

// 报表配置
export interface ReportConfig {
  format: 'pdf' | 'excel' | 'csv'
  timeRange: string
  includeCharts: boolean
  includeInsights: boolean
  sections: {
    id: string
    name: string
    enabled: boolean
  }[]
}

// 告警配置
export interface AlertConfig {
  id: string
  name: string
  description: string
  enabled: boolean
  conditions: {
    metric: string
    operator: '>' | '<' | '=' | '>=' | '<=' | '!='
    threshold: number
    duration: number // 分钟
  }[]
  actions: {
    type: 'email' | 'webhook' | 'sms' | 'push'
    target: string
    template?: string
  }[]
  cooldown: number // 分钟
}

// 仪表板配置
export interface DashboardConfig {
  id: string
  name: string
  layout: 'grid' | 'flex' | 'custom'
  widgets: {
    id: string
    type: string
    position: {
      x: number
      y: number
      width: number
      height: number
    }
    config: Record<string, any>
  }[]
  refreshInterval: number // 秒
  timeRange: string
  filters: {
    name: string
    type: string
    options: any[]
  }[]
}