import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';
import { Badge, BadgeText } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// 模拟用户数据
const userData = {
  name: '张三',
  avatar: null,
  level: '高级用户',
  points: 1250,
};

// 模拟快捷功能
const quickActions = [
  {
    id: '1',
    title: '发布内容',
    icon: 'plus.circle.fill',
    color: '#3b82f6',
  },
  {
    id: '2',
    title: '我的收藏',
    icon: 'heart.fill',
    color: '#ef4444',
  },
  {
    id: '3',
    title: '学习记录',
    icon: 'book.fill',
    color: '#10b981',
  },
  {
    id: '4',
    title: '消息中心',
    icon: 'message.fill',
    color: '#f59e0b',
  },
];

// 模拟推荐内容
const recommendedContent = [
  {
    id: '1',
    title: 'React Native 开发最佳实践',
    description: '学习 React Native 开发中的最佳实践和常见陷阱',
    author: '李四',
    authorAvatar: null,
    category: '技术',
    readTime: '6分钟',
    likes: 89,
    isNew: true,
  },
  {
    id: '2',
    title: '移动端性能优化指南',
    description: '全面的移动端应用性能优化策略和技巧',
    author: '王五',
    authorAvatar: null,
    category: '技术',
    readTime: '8分钟',
    likes: 156,
    isNew: false,
  },
  {
    id: '3',
    title: 'UI/UX 设计趋势2024',
    description: '2024年最新的移动端界面设计趋势分析',
    author: '赵六',
    authorAvatar: null,
    category: '设计',
    readTime: '5分钟',
    likes: 203,
    isNew: true,
  },
];

// 模拟学习进度
const learningProgress = [
  {
    id: '1',
    title: 'React Native 基础',
    progress: 75,
    totalLessons: 20,
    completedLessons: 15,
  },
  {
    id: '2',
    title: 'TypeScript 进阶',
    progress: 45,
    totalLessons: 15,
    completedLessons: 7,
  },
  {
    id: '3',
    title: '移动端UI设计',
    progress: 90,
    totalLessons: 12,
    completedLessons: 11,
  },
];

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  const renderQuickAction = (item: typeof quickActions[0]) => (
    <Button
      key={item.id}
      variant="outline"
      style={[styles.quickActionButton, { borderColor: item.color }]}
      onPress={() => console.log(`Quick action: ${item.title}`)}
    >
      <VStack space="xs" style={styles.quickActionContent}>
        <IconSymbol
          name={item.icon as any}
          size={32}
          color={item.color}
        />
        <Text size="sm" style={[styles.quickActionText, { color: item.color }]}>
          {item.title}
        </Text>
      </VStack>
    </Button>
  );

  const renderRecommendedItem = (item: typeof recommendedContent[0]) => (
    <Card key={item.id} style={styles.recommendedCard}>
      <VStack space="md" style={styles.cardContent}>
        <HStack space="sm" style={styles.cardHeader}>
          <VStack space="xs" style={styles.cardTitleSection}>
            <HStack space="sm" style={styles.titleRow}>
              <Heading size="md" style={styles.cardTitle}>
                {item.title}
              </Heading>
              {item.isNew && (
                <Badge variant="solid" style={styles.newBadge}>
                  <BadgeText>新</BadgeText>
                </Badge>
              )}
            </HStack>
            <Badge variant="outline" style={styles.categoryBadge}>
              <BadgeText>{item.category}</BadgeText>
            </Badge>
          </VStack>
        </HStack>
        
        <Text size="sm" style={styles.cardDescription}>
          {item.description}
        </Text>
        
        <HStack space="md" style={styles.cardFooter}>
          <HStack space="sm" style={styles.authorSection}>
            <Avatar size="sm">
              {item.authorAvatar ? (
                <AvatarImage source={{ uri: item.authorAvatar }} />
              ) : (
                <AvatarFallbackText>{item.author}</AvatarFallbackText>
              )}
            </Avatar>
            <Text size="xs" style={styles.authorText}>
              {item.author}
            </Text>
          </HStack>
          <HStack space="md" style={styles.metaInfo}>
            <HStack space="xs" style={styles.readInfo}>
              <IconSymbol
                name="clock"
                size={14}
                color={Colors[colorScheme ?? 'light'].text}
              />
              <Text size="xs" style={styles.readTimeText}>
                {item.readTime}
              </Text>
            </HStack>
            <HStack space="xs" style={styles.likesInfo}>
              <IconSymbol
                name="heart"
                size={14}
                color={Colors[colorScheme ?? 'light'].text}
              />
              <Text size="xs" style={styles.likesText}>
                {item.likes}
              </Text>
            </HStack>
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );

  const renderProgressItem = (item: typeof learningProgress[0]) => (
    <Card key={item.id} style={styles.progressCard}>
      <VStack space="md" style={styles.progressContent}>
        <HStack space="sm" style={styles.progressHeader}>
          <VStack space="xs" style={styles.progressTitleSection}>
            <Text size="md" style={styles.progressTitle}>
              {item.title}
            </Text>
            <Text size="sm" style={styles.progressSubtitle}>
              {item.completedLessons}/{item.totalLessons} 课时
            </Text>
          </VStack>
          <Text size="lg" style={styles.progressPercentage}>
            {item.progress}%
          </Text>
        </HStack>
        
        <VStack space="xs" style={styles.progressBarContainer}>
          <HStack space="sm" style={styles.progressBar}>
            <VStack
              style={[
                styles.progressFill,
                { width: `${item.progress}%` },
              ]}
            />
          </HStack>
        </VStack>
      </VStack>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <VStack space="xl" style={styles.content}>
          {/* 用户欢迎区域 */}
          <VStack space="md" style={styles.welcomeSection}>
            <HStack space="md" style={styles.userInfo}>
              <Avatar size="lg">
                {userData.avatar ? (
                  <AvatarImage source={{ uri: userData.avatar }} />
                ) : (
                  <AvatarFallbackText>{userData.name}</AvatarFallbackText>
                )}
              </Avatar>
              <VStack space="xs" style={styles.userDetails}>
                <Heading size="xl" style={styles.welcomeTitle}>
                  欢迎回来，{userData.name}！
                </Heading>
                <Text size="sm" style={styles.userLevel}>
                  {userData.level} • {userData.points} 积分
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* 快捷功能 */}
          <VStack space="md" style={styles.quickActionsSection}>
            <Heading size="lg" style={styles.sectionTitle}>
              快捷功能
            </Heading>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.quickActionsList}
            >
              {quickActions.map(renderQuickAction)}
            </ScrollView>
          </VStack>

          {/* 学习进度 */}
          <VStack space="md" style={styles.progressSection}>
            <Heading size="lg" style={styles.sectionTitle}>
              学习进度
            </Heading>
            <VStack space="sm" style={styles.progressList}>
              {learningProgress.map(renderProgressItem)}
            </VStack>
          </VStack>

          {/* 推荐内容 */}
          <VStack space="md" style={styles.recommendedSection}>
            <Heading size="lg" style={styles.sectionTitle}>
              推荐内容
            </Heading>
            <VStack space="md" style={styles.recommendedList}>
              {recommendedContent.map(renderRecommendedItem)}
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  welcomeSection: {
    marginBottom: 16,
  },
  userInfo: {
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
  },
  welcomeTitle: {
    fontWeight: 'bold',
  },
  userLevel: {
    opacity: 0.7,
  },
  quickActionsSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  quickActionsList: {
    paddingHorizontal: 4,
  },
  quickActionButton: {
    marginRight: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    minWidth: 80,
    height:"auto"
  },
  quickActionContent: {
    alignItems: 'center',
  },
  quickActionText: {
    fontWeight: '500',
    lineHeight: 16,
    height: 16,
  },
  progressSection: {
    marginBottom: 16,
  },
  progressList: {
    paddingBottom: 8,
  },
  progressCard: {
    marginBottom: 12,
  },
  progressContent: {
    padding: 16,
  },
  progressHeader: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressTitleSection: {
    flex: 1,
  },
  progressTitle: {
    fontWeight: '600',
  },
  progressSubtitle: {
    opacity: 0.7,
  },
  progressPercentage: {
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  progressBarContainer: {
    marginTop: 8,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#e5e7eb',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 4,
  },
  recommendedSection: {
    marginBottom: 16,
  },
  recommendedList: {
    paddingBottom: 8,
  },
  recommendedCard: {
    marginBottom: 16,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cardTitleSection: {
    flex: 1,
  },
  titleRow: {
    alignItems: 'center',
  },
  cardTitle: {
    fontWeight: '600',
  },
  newBadge: {
    backgroundColor: '#ef4444',
  },
  categoryBadge: {
    alignSelf: 'flex-start',
  },
  cardDescription: {
    opacity: 0.8,
    lineHeight: 20,
  },
  cardFooter: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  authorSection: {
    alignItems: 'center',
  },
  authorText: {
    opacity: 0.7,
  },
  metaInfo: {
    alignItems: 'center',
  },
  readInfo: {
    alignItems: 'center',
  },
  readTimeText: {
    opacity: 0.7,
  },
  likesInfo: {
    alignItems: 'center',
  },
  likesText: {
    opacity: 0.7,
  },
});
