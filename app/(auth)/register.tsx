import { Button, ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { HStack } from '@/components/ui/hstack';
import { Input, InputField, InputSlot } from '@/components/ui/input';
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

export default function RegisterScreen() {
  const colorScheme = useColorScheme();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!username || !email || !password || !confirmPassword) {
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    setIsLoading(true);
    // 模拟注册请求
    setTimeout(() => {
      setIsLoading(false);
      router.replace('/(tabs)');
    }, 2000);
  };

  const handleLogin = () => {
    router.back();
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
              name="person.badge.plus"
              color={Colors[colorScheme ?? 'light'].tint}
            />
            <Heading size="2xl" style={styles.title}>
              创建账户
            </Heading>
            <Text size="md" style={styles.subtitle}>
              请填写以下信息完成注册
            </Text>
          </VStack>

          {/* 表单 */}
          <VStack space="lg" style={styles.form}>
            <FormControl isInvalid={!username && username !== ''}>
              <FormControlLabel>
                <FormControlLabelText>用户名</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  placeholder="请输入用户名"
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </Input>
              <FormControlError>
                <FormControlErrorText>请输入用户名</FormControlErrorText>
              </FormControlError>
            </FormControl>

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
                <InputSlot onPress={() => setShowPassword(!showPassword)}>
                  <IconSymbol
                    name={showPassword ? 'eye.slash' : 'eye'}
                    size={20}
                    color={Colors[colorScheme ?? 'light'].text}
                  />
                </InputSlot>
              </Input>
              <FormControlError>
                <FormControlErrorText>请输入密码</FormControlErrorText>
              </FormControlError>
            </FormControl>

            <FormControl isInvalid={!confirmPassword && confirmPassword !== ''}>
              <FormControlLabel>
                <FormControlLabelText>确认密码</FormControlLabelText>
              </FormControlLabel>
              <Input>
                <InputField
                  placeholder="请再次输入密码"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                />
                <InputSlot onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                  <IconSymbol
                    name={showConfirmPassword ? 'eye.slash' : 'eye'}
                    size={20}
                    color={Colors[colorScheme ?? 'light'].text}
                  />
                </InputSlot>
              </Input>
              <FormControlError>
                <FormControlErrorText>请确认密码</FormControlErrorText>
              </FormControlError>
            </FormControl>

            <Button
              size="lg"
              onPress={handleRegister}
              isDisabled={isLoading || !username || !email || !password || !confirmPassword}
              style={styles.registerButton}
            >
              <ButtonText>{isLoading ? '注册中...' : '注册'}</ButtonText>
            </Button>
          </VStack>

          {/* 其他选项 */}
          <VStack space="md" style={styles.options}>
            <Divider />

            <HStack space="sm" style={styles.loginSection}>
              <Text size="sm">已有账户？</Text>
              <Link onPress={handleLogin}>
                <LinkText>立即登录</LinkText>
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
  registerButton: {
    marginTop: 16,
  },
  options: {
    alignItems: 'center',
  },
  loginSection: {
    alignItems: 'center',
  },
}); 