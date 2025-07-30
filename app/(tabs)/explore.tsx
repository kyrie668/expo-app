import { Badge, BadgeText } from '@/components/ui/badge';
import { Button, ButtonText } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Input, InputField } from '@/components/ui/input';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

// 模拟分类数据
const categories = [
  { id: '1', name: '技术', icon: 'laptopcomputer' },
  { id: '2', name: '设计', icon: 'paintbrush' },
  // { id: '3', name: '编程', icon: 'code' },
  { id: '4', name: '产品', icon: 'cube' },
  { id: '5', name: '运营', icon: 'chart.line.uptrend.xyaxis' },
  { id: '6', name: '营销', icon: 'megaphone' },
];

// 模拟内容数据
const exploreData = [
  {
    id: '1',
    title: 'React Native 性能优化实战',
    description: '深入探讨 React Native 应用的性能优化技巧，包括内存管理、渲染优化等',
    author: '李四',
    category: '技术',
    readTime: '8分钟',
    likes: 128,
    isFavorite: false,
  },
  {
    id: '2',
    title: '移动端UI设计趋势2024',
    description: '2024年移动端界面设计的最新趋势和最佳实践',
    author: '王五',
    category: '设计',
    readTime: '5分钟',
    likes: 89,
    isFavorite: true,
  },
  {
    id: '3',
    title: 'TypeScript 高级特性详解',
    description: '掌握 TypeScript 的高级类型、泛型、装饰器等特性',
    author: '赵六',
    category: '编程',
    readTime: '12分钟',
    likes: 156,
    isFavorite: false,
  },
  {
    id: '4',
    title: '产品经理必备技能',
    description: '从需求分析到产品上线的完整流程和关键技能',
    author: '钱七',
    category: '产品',
    readTime: '10分钟',
    likes: 203,
    isFavorite: false,
  },
];

export default function ExploreScreen() {
  const colorScheme = useColorScheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const renderCategoryItem = (item: typeof categories[0]) => (
    <Button
      key={item.id}
      variant={selectedCategory === item.id ? 'solid' : 'outline'}
      size="sm"
      className={selectedCategory === item.id ? 'bg-blue-500 mr-2' : 'mr-2'}
      onPress={() => setSelectedCategory(selectedCategory === item.id ? null : item.id)}
    >
      <IconSymbol
        name={item.icon as any}
        size={16}
        color={selectedCategory === item.id ? '#fff' : Colors[colorScheme ?? 'light'].text}
      />
      <ButtonText
        className={selectedCategory === item.id ? 'text-white' : 'text-gray-700'}
      >
        {item.name}
      </ButtonText>
    </Button>
  );

  const renderExploreItem = (item: typeof exploreData[0]) => (
    <Card key={item.id} style={styles.exploreCard}>
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
          <Button
            variant="outline"
            size="sm"
            style={styles.favoriteButton}
            onPress={() => console.log('Toggle favorite')}
          >
            <IconSymbol
              name={item.isFavorite ? 'heart.fill' : 'heart'}
              size={20}
              color={item.isFavorite ? '#ef4444' : Colors[colorScheme ?? 'light'].text}
            />
          </Button>
        </HStack>
        
        <Text size="sm" style={styles.cardDescription}>
          {item.description}
        </Text>
        
        <HStack space="md" style={styles.cardFooter}>
          <HStack space="xs" style={styles.authorInfo}>
            <IconSymbol
              name="person.circle"
              size={16}
              color={Colors[colorScheme ?? 'light'].text}
            />
            <Text size="xs" style={styles.authorText}>
              {item.author}
            </Text>
          </HStack>
          <HStack space="xs" style={styles.readInfo}>
            <IconSymbol
              name="clock"
              size={16}
              color={Colors[colorScheme ?? 'light'].text}
            />
            <Text size="xs" style={styles.readTimeText}>
              {item.readTime}
            </Text>
          </HStack>
          <HStack space="xs" style={styles.likesInfo}>
            <IconSymbol
              name="heart"
              size={16}
              color={Colors[colorScheme ?? 'light'].text}
            />
            <Text size="xs" style={styles.likesText}>
              {item.likes}
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <VStack space="lg" style={styles.content}>
          {/* 搜索栏 */}
          <VStack space="md" style={styles.searchSection}>
            <Heading size="2xl" style={styles.title}>
              发现
            </Heading>
            <Input style={styles.searchInput}>
              <InputField
                placeholder="搜索感兴趣的内容..."
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
              <IconSymbol
                name="magnifyingglass"
                size={20}
                color={Colors[colorScheme ?? 'light'].text}
                style={styles.searchIcon}
              />
            </Input>
          </VStack>

          {/* 分类标签 */}
          <VStack space="md" style={styles.categoriesSection}>
            <Heading size="lg" style={styles.sectionTitle}>
              分类
            </Heading>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesList}
            >
              {categories.map(renderCategoryItem)}
            </ScrollView>
          </VStack>

          {/* 内容列表 */}
          <VStack space="md" style={styles.contentSection}>
            <Heading size="lg" style={styles.sectionTitle}>
              推荐内容
            </Heading>
            <VStack space="md" style={styles.contentList}>
              {exploreData.map(renderExploreItem)}
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
    flex: 1,
    padding: 16,
  },
  searchSection: {
    marginBottom: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  searchInput: {
    position: 'relative',
  },
  searchIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
  categoriesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  categoriesList: {
    paddingHorizontal: 4,
  },
  categoryButton: {
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  selectedCategory: {
    backgroundColor: '#3b82f6',
  },
  categoryText: {
    marginLeft: 4,
  },
  selectedCategoryText: {
    color: '#fff',
  },
  contentSection: {
    flex: 1,
  },
  contentList: {
    paddingBottom: 20,
  },
  exploreCard: {
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
  favoriteButton: {
    padding: 4,
    borderWidth: 0,
  },
  cardDescription: {
    opacity: 0.8,
    lineHeight: 20,
  },
  cardFooter: {
    alignItems: 'center',
  },
  authorInfo: {
    alignItems: 'center',
  },
  authorText: {
    opacity: 0.7,
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
