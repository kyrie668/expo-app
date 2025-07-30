import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField } from '@/components/ui/input';
import { SafeAreaView } from '@/components/ui/safe-area-view';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';

import { FormControl, FormControlError, FormControlErrorText, FormControlLabel, FormControlLabelText } from '@/components/ui/form-control';




import { Link, LinkText } from '@/components/ui/link';

import { Divider } from '@/components/ui/divider';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return;
    }

    setIsLoading(true);
    // 模拟登录请求
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)');
    }, 2000);
  };

  const handleRegister = () => {
    router.push('/register' as any);
  };

  const handleForgotPassword = () => {
    router.push('/forgot-password' as any);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <VStack space="xl" style={styles.content}>
          {/* 头部 */}
          <VStack space="md" style={styles.header}>
            <IconSymbol
              size={60}
              name="person.circle.fill"
              color={Colors[colorScheme ?? 'light'].tint}
            />
            <Heading size="2xl" style={styles.title}>
              欢迎回来
            </Heading>
            <Text size="md" style={styles.subtitle}>
              请登录您的账户
            </Text>
          </VStack>

          {/* 表单 */}
          <VStack space="lg" style={styles.form}>
            <FormControl isInvalid={!email && email !== ''}>
              <FormControlLabel>
                <FormControlLabelText>邮箱</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  placeholder="请输入邮箱地址"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>请输入有效的邮箱地址</FormControlErrorText>
              </FormControlError>
            </FormControl>

            <FormControl isInvalid={!password && password !== ''}>
              <FormControlLabel>
                <FormControlLabelText>密码</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  placeholder="请输入密码"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>请输入密码</FormControlErrorText>
              </FormControlError>
            </FormControl>

            <Button
              size="lg"
              onPress={handleLogin}
              isDisabled={isLoading || !email || !password}
              style={styles.loginButton}
            >
              <ButtonText>{isLoading ? '登录中...' : '登录'}</ButtonText>
            </Button>
          </VStack>

          {/* 其他选项 */}
          <VStack space="md" style={styles.options}>
            <Link onPress={handleForgotPassword}>
              <LinkText>忘记密码？</LinkText>
            </Link>

            <Divider />

            <HStack space="sm" style={styles.registerSection}>
              <Text size="sm">还没有账户？</Text>
              <Link onPress={handleRegister}>
                <LinkText>立即注册</LinkText>
              </Link>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardView: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  form: {
    marginBottom: 24,
  },
  loginButton: {
    marginTop: 16,
  },
  options: {
    alignItems: 'center',
  },
  registerSection: {
    alignItems: 'center',
  },
}); 