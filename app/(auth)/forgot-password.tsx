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

export default function ForgotPasswordScreen() {
  const colorScheme = useColorScheme();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSendResetEmail = async () => {
    if (!email) {
      return;
    }

    setIsLoading(true);
    // 模拟发送重置邮件
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 2000);
  };

  const handleBackToLogin = () => {
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
              name="lock.rotation"
              color={Colors[colorScheme ?? 'light'].tint}
            />
            <Heading size="2xl" style={styles.title}>
              重置密码
            </Heading>
            <Text size="md" style={styles.subtitle}>
              请输入您的邮箱地址，我们将发送重置密码的链接
            </Text>
          </VStack>

          {!isSent ? (
            <>
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

                <Button
                  size="lg"
                  onPress={handleSendResetEmail}
                  isDisabled={isLoading || !email}
                  style={styles.sendButton}
                >
                  <ButtonText>{isLoading ? '发送中...' : '发送重置链接'}</ButtonText>
                </Button>
              </VStack>
            </>
          ) : (
            /* 成功状态 */
            <VStack space="lg" style={styles.successSection}>
              <IconSymbol
                size={60}
                name="checkmark.circle.fill"
                color="#10B981"
              />
              <Heading size="xl" style={styles.successTitle}>
                邮件已发送
              </Heading>
              <Text size="md" style={styles.successText}>
                重置密码的链接已发送到您的邮箱，请查收并按照提示重置密码。
              </Text>
            </VStack>
          )}

          {/* 其他选项 */}
          <VStack space="md" style={styles.options}>
            <Divider />

            <HStack space="sm" style={styles.backSection}>
              <Text size="sm">记起密码了？</Text>
              <Link onPress={handleBackToLogin}>
                <LinkText>返回登录</LinkText>
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
  sendButton: {
    marginTop: 16,
  },
  successSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  successTitle: {
    textAlign: 'center',
    color: '#10B981',
  },
  successText: {
    textAlign: 'center',
    opacity: 0.7,
  },
  options: {
    alignItems: 'center',
  },
  backSection: {
    alignItems: 'center',
  },
}); 