import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const cards = [
  // "🥹",
  // "🗣️",
  // "🦷",
  // "🍑",
  // "🌪️",
  // "🌎",
  "🐷",
  "🪝",
  "⚛️",
  "🔑",
  "🥕",
  "🥑",
  "👻",
  // "🥶",
  // "🥵",
];

export default function Memorama({ score, setScore }) {
  const [board, setBoard] = useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    if (selectedCards.length < 2) return;

    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index) => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    if (matchedCards.length > 0 && matchedCards.length < 3) {
      setScore(1);
    }
    if (matchedCards.length > 4 && matchedCards.length <= 6) {
      setScore(2);
    }
    if (matchedCards.length > 6 && matchedCards.length <= 9) {
      setScore(3);
    }
    if (matchedCards.length > 9 && matchedCards.length <= 12) {
      setScore(4);
    }
    didPlayerWin() && setScore(5);
  };
  console.log(score);
  const didPlayerWin = () => matchedCards.length === board.length;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {didPlayerWin() ? "Ganaste 🎉" : "Memorama"}
      </Text>
      {/* <Text style={styles.title}>Score: {score}</Text> */}
      <View style={styles.board}>
        {board.map((card, index) => {
          const isTurnedOver =
            selectedCards.includes(index) || matchedCards.includes(index);
          return (
            <Card
              key={index}
              isTurnedOver={isTurnedOver}
              onPress={() => handleTapCard(index)}
            >
              {card}
            </Card>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  board: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  title: {
    fontSize: 32,
    fontWeight: "900",
    color: "white",
    marginVertical: 15,
  },
});

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap the elements at i and randomIndex
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
