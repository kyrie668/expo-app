import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
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
        name="login"
        options={{
          title: '登录',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register"
        options={{
          title: '注册',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgot-password"
        options={{
          title: '忘记密码',
        }}
      />
    </Stack>
  );
} 