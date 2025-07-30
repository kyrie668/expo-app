import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Divider } from '@/components/ui/divider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Switch } from '@/components/ui/switch';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function SettingsScreen() {
  const colorScheme = useColorScheme();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(colorScheme === 'dark');
  const [autoPlay, setAutoPlay] = useState(false);
  const [dataSaver, setDataSaver] = useState(true);

  const settingsSections = [
    {
      id: '1',
      title: '通知设置',
      items: [
        {
          id: '1-1',
          title: '推送通知',
          subtitle: '接收应用推送通知',
          type: 'switch',
          value: notifications,
          onValueChange: setNotifications,
        },
      ],
    },
    {
      id: '2',
      title: '外观设置',
      items: [
        {
          id: '2-1',
          title: '深色模式',
          subtitle: '使用深色主题',
          type: 'switch',
          value: darkMode,
          onValueChange: setDarkMode,
        },
      ],
    },
    {
      id: '3',
      title: '内容设置',
      items: [
        {
          id: '3-1',
          title: '自动播放',
          subtitle: '自动播放视频内容',
          type: 'switch',
          value: autoPlay,
          onValueChange: setAutoPlay,
        },
        {
          id: '3-2',
          title: '数据节省',
          subtitle: '减少数据使用量',
          type: 'switch',
          value: dataSaver,
          onValueChange: setDataSaver,
        },
      ],
    },
    {
      id: '4',
      title: '账户设置',
      items: [
        {
          id: '4-1',
          title: '隐私政策',
          subtitle: '查看隐私政策',
          type: 'link',
          icon: 'doc.text',
        },
        {
          id: '4-2',
          title: '用户协议',
          subtitle: '查看用户协议',
          type: 'link',
          icon: 'doc.text',
        },
        {
          id: '4-3',
          title: '清除缓存',
          subtitle: '清除应用缓存数据',
          type: 'link',
          icon: 'trash',
        },
      ],
    },
  ];

  const renderSettingItem = (item: any) => {
    if (item.type === 'switch') {
      return (
        <HStack space="md" style={styles.settingItem}>
          <VStack space="xs" style={styles.settingContent}>
            <Text size="md" style={styles.settingTitle}>
              {item.title}
            </Text>
            <Text size="sm" style={styles.settingSubtitle}>
              {item.subtitle}
            </Text>
          </VStack>
          <Switch
            value={item.value}
            onValueChange={item.onValueChange}
            size="md"
          />
        </HStack>
      );
    }

    if (item.type === 'link') {
      return (
        <Button
          key={item.id}
          variant="outline"
          style={styles.settingItem}
          onPress={() => console.log(`Navigate to: ${item.title}`)}
        >
          <HStack space="md" style={styles.settingContent}>
            <IconSymbol
              name={item.icon as any}
              size={20}
              color={Colors[colorScheme ?? 'light'].text}
            />
            <VStack space="xs" style={styles.settingTextContent}>
              <Text size="md" style={styles.settingTitle}>
                {item.title}
              </Text>
              <Text size="sm" style={styles.settingSubtitle}>
                {item.subtitle}
              </Text>
            </VStack>
          </HStack>
          <IconSymbol
            name="chevron.right"
            size={16}
            color={Colors[colorScheme ?? 'light'].text}
            style={styles.settingArrow}
          />
        </Button>
      );
    }

    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <VStack space="xl" style={styles.content}>
          {settingsSections.map((section) => (
            <VStack key={section.id} space="md" style={styles.section}>
              <Heading size="lg" style={styles.sectionTitle}>
                {section.title}
              </Heading>
              <VStack space="xs" style={styles.sectionContent}>
                {section.items.map((item) => (
                  <React.Fragment key={item.id}>
                    {renderSettingItem(item)}
                    {item.id !== section.items[section.items.length - 1].id && (
                      <Divider />
                    )}
                  </React.Fragment>
                ))}
              </VStack>
            </VStack>
          ))}

          {/* 版本信息 */}
          <VStack space="md" style={styles.versionSection}>
            <Divider />
            <VStack space="xs" style={styles.versionInfo}>
              <Text size="sm" style={styles.versionText}>
                应用版本：1.0.0
              </Text>
              <Text size="sm" style={styles.versionText}>
                构建版本：2024.01.15
              </Text>
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
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  sectionContent: {
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    overflow: 'hidden',
  },
  settingItem: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 0,
  },
  settingContent: {
    flex: 1,
    alignItems: 'center',
  },
  settingTextContent: {
    flex: 1,
  },
  settingTitle: {
    fontWeight: '500',
  },
  settingSubtitle: {
    opacity: 0.7,
  },
  settingArrow: {
    opacity: 0.5,
  },
  versionSection: {
    marginTop: 16,
  },
  versionInfo: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  versionText: {
    opacity: 0.6,
  },
}); 