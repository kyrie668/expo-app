import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Badge, BadgeText } from '@/components/ui/badge';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// 模拟收藏数据
const favoritesData = [
  {
    id: '1',
    title: 'React Native 开发指南',
    description: '学习如何使用 React Native 构建跨平台移动应用',
    category: '技术',
    date: '2024-01-15',
    isFavorite: true,
  },
  {
    id: '2',
    title: '移动端UI设计原则',
    description: '了解移动端界面设计的最佳实践和原则',
    category: '设计',
    date: '2024-01-10',
    isFavorite: true,
  },
  {
    id: '3',
    title: 'TypeScript 进阶教程',
    description: '深入理解 TypeScript 的高级特性和用法',
    category: '编程',
    date: '2024-01-08',
    isFavorite: true,
  },
  {
    id: '4',
    title: '移动端性能优化',
    description: '提升移动应用性能的实用技巧和方法',
    category: '技术',
    date: '2024-01-05',
    isFavorite: true,
  },
];

export default function FavoritesScreen() {
  const colorScheme = useColorScheme();

  const renderFavoriteItem = (item: typeof favoritesData[0]) => (
    <Card key={item.id} style={styles.card}>
      <VStack space="md" style={styles.cardContent}>
        <HStack space="sm" style={styles.cardHeader}>
          <VStack space="xs" style={styles.cardTitleSection}>
            <Heading size="md" style={styles.cardTitle}>
              {item.title}
            </Heading>
            <Badge variant="outline" style={styles.badge}>
              <BadgeText>{item.category}</BadgeText>
            </Badge>
          </VStack>
          <IconSymbol
            name="heart.fill"
            size={24}
            color={Colors[colorScheme ?? 'light'].tint}
          />
        </HStack>
        
        <Text size="sm" style={styles.cardDescription}>
          {item.description}
        </Text>
        
        <HStack space="sm" style={styles.cardFooter}>
          <Text size="xs" style={styles.cardDate}>
            {item.date}
          </Text>
          <Button size="sm" variant="outline">
            <ButtonText>查看详情</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <VStack space="lg" style={styles.content}>
          {/* 头部 */}
          <VStack space="md" style={styles.header}>
            <Heading size="2xl" style={styles.title}>
              我的收藏
            </Heading>
            <Text size="md" style={styles.subtitle}>
              您收藏的内容将在这里显示
            </Text>
          </VStack>

          {/* 收藏列表 */}
          {favoritesData.length > 0 ? (
            <VStack space="md" style={styles.listContainer}>
              {favoritesData.map(renderFavoriteItem)}
            </VStack>
          ) : (
            <VStack space="md" style={styles.emptyState}>
              <IconSymbol
                size={80}
                name="heart"
                color={Colors[colorScheme ?? 'light'].text}
                style={styles.emptyIcon}
              />
              <Heading size="lg" style={styles.emptyTitle}>
                暂无收藏
              </Heading>
              <Text size="md" style={styles.emptyText}>
                您还没有收藏任何内容，快去发现页面看看吧！
              </Text>
              <Button size="lg" style={styles.exploreButton}>
                <ButtonText>去发现</ButtonText>
              </Button>
            </VStack>
          )}
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
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    opacity: 0.7,
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
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
  cardTitle: {
    fontWeight: '600',
  },
  badge: {
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
  cardDate: {
    opacity: 0.6,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyIcon: {
    opacity: 0.5,
  },
  emptyTitle: {
    textAlign: 'center',
  },
  emptyText: {
    textAlign: 'center',
    opacity: 0.7,
  },
  exploreButton: {
    marginTop: 16,
  },
}); 