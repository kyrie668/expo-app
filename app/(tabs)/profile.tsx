import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar';

import { Divider } from '@/components/ui/divider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// 模拟用户数据
const userData = {
  name: '张三',
  email: 'zhangsan@example.com',
  avatar: null, // 可以设置为头像URL
  joinDate: '2024-01-01',
  favorites: 12,
  posts: 5,
};

// 菜单项数据
const menuItems = [
  {
    id: '1',
    title: '个人资料',
    icon: 'person.circle',
    action: () => router.push('/profile' as any),
  },
  {
    id: '2',
    title: '通知设置',
    icon: 'bell',
    action: () => router.push('/notifications' as any),
  },
  {
    id: '3',
    title: '应用设置',
    icon: 'gearshape',
    action: () => router.push('/settings' as any),
  },
  {
    id: '4',
    title: '帮助与反馈',
    icon: 'questionmark.circle',
    action: () => console.log('帮助与反馈'),
  },
  {
    id: '5',
    title: '关于我们',
    icon: 'info.circle',
    action: () => console.log('关于我们'),
  },
];

export default function ProfileScreen() {
  const colorScheme = useColorScheme();

  const handleLogout = () => {
    // 模拟登出
    router.replace('/login' as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <VStack space="xl" style={styles.content}>
          {/* 用户信息卡片 */}
          <VStack space="lg" style={styles.userCard}>
            <VStack space="md" style={styles.userInfo}>
              <Avatar size="2xl" style={styles.avatar}>
                {userData.avatar ? (
                  <AvatarImage source={{ uri: userData.avatar }} />
                ) : (
                  <AvatarFallbackText>{userData.name}</AvatarFallbackText>
                )}
              </Avatar>
              <VStack space="xs" style={styles.userDetails}>
                <Heading size="xl" style={styles.userName}>
                  {userData.name}
                </Heading>
                <Text size="sm" style={styles.userEmail}>
                  {userData.email}
                </Text>
                <Text size="xs" style={styles.joinDate}>
                  加入时间：{userData.joinDate}
                </Text>
              </VStack>
            </VStack>

            {/* 统计信息 */}
            <HStack space="lg" style={styles.stats}>
              <VStack space="xs" style={styles.statItem}>
                <Text size="lg" style={styles.statNumber}>
                  {userData.favorites}
                </Text>
                <Text size="sm" style={styles.statLabel}>
                  收藏
                </Text>
              </VStack>
              <Divider orientation="vertical" />
              <VStack space="xs" style={styles.statItem}>
                <Text size="lg" style={styles.statNumber}>
                  {userData.posts}
                </Text>
                <Text size="sm" style={styles.statLabel}>
                  发布
                </Text>
              </VStack>
            </HStack>
          </VStack>

          {/* 菜单列表 */}
          <VStack space="md" style={styles.menuSection}>
            <Heading size="lg" style={styles.menuTitle}>
              设置
            </Heading>
            <VStack space="xs" style={styles.menuList}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  className="flex-row items-center justify-between border-0 py-2"
                  onPress={item.action}
                  style={{
                    borderWidth: 0,
                    borderBottomWidth: 1,
                    borderColor: '#E5E7EB',
                    paddingVertical: 14,
                  }}
                >
                  <HStack space="md" className="flex-row items-center">
                    <IconSymbol
                      name={item.icon as any}
                      size={24}
                      color={Colors[colorScheme ?? 'light'].text}
                    />
                    <Text size="md" className="text-[16px] line-height-[20px]">
                      {item.title}
                    </Text>
                  </HStack>
                  <IconSymbol
                    name="chevron.right"
                    size={20}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={styles.menuItemArrow}
                  />
                </Button>
              ))}
            </VStack>
          </VStack>

          {/* 登出按钮 */}
          <Button variant="outline" style={styles.logoutButton} onPress={handleLogout}>
            <ButtonText style={styles.logoutText}>退出登录</ButtonText>
          </Button>
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
  userCard: {
    padding: 20,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
  },
  userInfo: {
    alignItems: 'center',
  },
  avatar: {
    alignSelf: 'center',
  },
  userDetails: {
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
  },
  userEmail: {
    opacity: 0.7,
  },
  joinDate: {
    opacity: 0.5,
  },
  stats: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  statLabel: {
    opacity: 0.7,
  },
  menuSection: {
    marginTop: 16,
  },
  menuTitle: {
    fontWeight: 'bold',
  },
  menuList: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    // overflow: 'hidden',
  },
  menuItem: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 0,
  },
  menuItemContent: {
    alignItems: 'center',
  },
  menuItemText: {
    fontWeight: '500',
  },
  menuItemArrow: {
    opacity: 0.5,
  },
  logoutButton: {
    marginTop: 32,
    borderColor: '#ef4444',
  },
  logoutText: {
    color: '#ef4444',
  },
});
