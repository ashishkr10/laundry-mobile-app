import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const PickUpScreen = () => {
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);
  const [delivery, setDelivery] = useState([]);
  const [address, setAdresss] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.quantity * item.price)
    .reduce((curr, prev) => curr + prev, 0);

  const date = [
    {
      id: "0",
      time: "Anytime",
    },
    {
      id: "1",
      time: "Today",
    },
    {
      id: "2",
      time: "Tomorrow",
    },
  ];

  const deliveryTime = [
    {
      id: "4",
      name: "Tommorrow",
    },
    {
      id: "0",
      name: "2-3 Days",
    },
    {
      id: "1",
      name: "3-4 Days",
    },
    {
      id: "2",
      name: "4-5 Days",
    },
    {
      id: "3",
      name: "5-6 Days",
    },
  ];

  const times = [
    {
      id: "0",
      time: "11:00 AM",
    },
    {
      id: "1",
      time: "12:00 PM",
    },
    {
      id: "2",
      time: "01:00 PM",
    },
    {
      id: "3",
      time: "02:00 PM",
    },
    {
      id: "4",
      time: "03:00 PM",
    },
    {
      id: "5",
      time: "04:00 PM",
    },
  ];

  const navigation = useNavigation();

  const proceedToCart = () => {
    if (!selectedDate && !selectedTime && !delivery && !address) {
      Alert.alert(
        "Empty or invalid",
        "Please select all the fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    if (selectedDate && selectedTime && delivery && address) {
      navigation.replace("Cart", {
        address: address,
        pickUpDate: selectedDate,
        selectedTime: selectedTime,
        no_Of_days: delivery,
      });
    }
  };
  return (
    <>
      <SafeAreaView style={{ marginTop: 50 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            marginHorizontal: 10,
            marginVertical: 30,
          }}
        >
          Pickup Details
        </Text>

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Enter Address
        </Text>
        <TextInput
          value={address}
          onChangeText={(text) => setAdresss(text)}
          placeholderTextColor="black"
          style={{
            fontSize: 16,
            padding: 10,
            borderColor: "gray",
            borderWidth: 0.7,
            paddingVertical: 10,
            borderRadius: 9,
            margin: 10,
          }}
        />

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Pick Up Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {date.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedDate(item.time)}
              style={
                selectedDate.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#2596be",
                      backgroundColor: "#2596be",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Select Time
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {times.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => setSelectedTime(item.time)}
              style={
                selectedTime.includes(item.time)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#2596be",
                      backgroundColor: "#2596be",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
            >
              <Text>{item.time}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Text style={{ fontSize: 16, fontWeight: "500", marginHorizontal: 10 }}>
          Delivery Date
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {deliveryTime.map((item, i) => (
            <Pressable
              style={
                delivery.includes(item.name)
                  ? {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "#2596be",
                      backgroundColor: "#2596be",
                      borderWidth: 0.7,
                    }
                  : {
                      margin: 10,
                      borderRadius: 7,
                      padding: 15,
                      borderColor: "gray",
                      borderWidth: 0.7,
                    }
              }
              onPress={() => setDelivery(item.name)}
              key={i}
            >
              <Text>{item.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </SafeAreaView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088F8F",
            marginTop: "auto",
            padding: 10,
            marginBottom: 20,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | ₹ {total}
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "400",
                color: "white",
                marginVertical: 6,
              }}
            >
              Extra charges might apply
            </Text>
          </View>

          <Pressable onPress={proceedToCart}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to Cart
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default PickUpScreen;

const styles = StyleSheet.create({});
