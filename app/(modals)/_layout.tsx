import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

export default function ModalLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        presentation: 'modal',
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        headerTintColor: Colors[colorScheme ?? 'light'].text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        animation: 'slide_from_bottom',
      }}
    >
      <Stack.Screen
        name="settings"
        options={{
          title: '设置',
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: '个人资料',
        }}
      />
      <Stack.Screen
        name="notifications"
        options={{
          title: '通知设置',
        }}
      />
    </Stack>
  );
} 