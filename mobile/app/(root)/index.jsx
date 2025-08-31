import { SignOutButton } from "@/components/SignOutButton";
import { SignedIn, SignedOut, useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";
import PageLoader from "../../components/PageLoader";
import { useTransactions } from "../../hooks/useTransactions";
export default function Page() {
  const { user } = useUser();
  // console.log("ユーザー:", user);

  const { transactions, summary, isLoading, loadData, deleteTransaction } = useTransactions(
    user.id
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log("トランザクション:", transactions);
  if (isLoading) return <PageLoader />;
  return (
    <View>
     
    </View>
  );
}
