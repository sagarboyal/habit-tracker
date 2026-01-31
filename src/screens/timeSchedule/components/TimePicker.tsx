import { COLORS } from "@/src/theme/colors";
import { FONT_FAMILY } from "@/src/theme/fonts/typography";
import { Period, TimeValue } from "@/src/types/timeValue";
import { useEffect, useRef } from "react";
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  value: TimeValue;
  onChange: (value: TimeValue) => void;
};

const ITEM_HEIGHT = 50;
const VISIBLE_ITEMS = 3;

export default function TimePicker({ value, onChange }: Props) {
  const update = (partial: Partial<TimeValue>) => {
    onChange({ ...value, ...partial });
  };

  const hours = Array.from({ length: 12 }, (_, i) => i + 1);
  const minutes = Array.from({ length: 60 }, (_, i) => i);
  const periods: Period[] = ["AM", "PM"];

  return (
    <View style={styles.container}>
      {/* Hour */}
      <WheelPicker
        data={hours}
        selectedValue={value.hour}
        onValueChange={(hour: number) => update({ hour })}
        renderItem={(item) => String(item)}
      />

      {/* Minute */}
      <WheelPicker
        data={minutes}
        selectedValue={value.minute}
        onValueChange={(minute: number) => update({ minute })}
        renderItem={(item) => String(item).padStart(2, "0")}
      />

      {/* AM / PM */}
      <WheelPicker
        data={periods}
        selectedValue={value.period}
        onValueChange={(period: Period) => update({ period })}
        renderItem={(item) => item}
      />
    </View>
  );
}

function WheelPicker<T>({
  data,
  selectedValue,
  onValueChange,
  renderItem,
}: {
  data: T[];
  selectedValue: T;
  onValueChange: (value: T) => void;
  renderItem: (item: T) => string;
}) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    const index = data.findIndex((item) => item === selectedValue);
    if (index !== -1 && scrollRef.current) {
      scrollRef.current.scrollTo({
        y: index * ITEM_HEIGHT,
        animated: false,
      });
    }
  }, [data, selectedValue]);

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = e.nativeEvent.contentOffset.y;
    const index = Math.round(y / ITEM_HEIGHT);
    if (index >= 0 && index < data.length && data[index] !== selectedValue) {
      onValueChange(data[index]);
    }
  };

  return (
    <View style={styles.wheel}>
      <View style={styles.highlightContainer}>
        <View style={styles.highlightBorder} />
      </View>

      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_HEIGHT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScroll}
        onScrollEndDrag={handleScroll}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top padding */}
        <View style={{ height: ITEM_HEIGHT }} />

        {data.map((item, index) => {
          const isSelected = item === selectedValue;
          return (
            <View key={index} style={styles.item}>
              <Text
                style={[styles.itemText, isSelected && styles.selectedItemText]}
              >
                {renderItem(item)}
              </Text>
            </View>
          );
        })}

        {/* Bottom padding */}
        <View style={{ height: ITEM_HEIGHT }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingVertical: 20,
  },
  wheel: {
    width: 80,
    height: ITEM_HEIGHT * VISIBLE_ITEMS,
    position: "relative",
  },
  scrollContent: {
    paddingVertical: 0,
  },
  highlightContainer: {
    position: "absolute",
    top: ITEM_HEIGHT,
    left: 0,
    right: 0,
    height: ITEM_HEIGHT,
    zIndex: 1,
    pointerEvents: "none",
    justifyContent: "center",
  },
  highlightBorder: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: COLORS.surface,
    height: ITEM_HEIGHT,
  },
  item: {
    height: ITEM_HEIGHT,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    fontSize: 28,
    color: COLORS.surface + "40",
    fontFamily: FONT_FAMILY.bold,
    textAlign: "center",
  },
  selectedItemText: {
    fontSize: 32,
    color: COLORS.surface,
    fontFamily: FONT_FAMILY.bold,
  },
});
