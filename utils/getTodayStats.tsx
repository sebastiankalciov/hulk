import {getFormattedCurrentDate} from "@/utils/getFormattedCurrentDate";


interface Stats {
    calories: number;
    proteins: number;
    carbohydrates: number;
    fats: number;
}

/**
 * # Fetch today stats (calories, proteins, carbs and fats)
 *
 */
export const getTodayStats = async (setStats: React.Dispatch<React.SetStateAction<Stats>>, meals: any[])=> {

    let calories: number = 0,
        proteins: number = 0,
        carbohydrates: number = 0,
        fats: number = 0;

    try {
        meals.map((mealObject: any) => {
            if (mealObject.date == getFormattedCurrentDate()) {
                calories += Number(mealObject.calories)
                proteins += Number(mealObject.proteins);
                carbohydrates += Number(mealObject.carbohydrates);
                fats += Number(mealObject.fats);

            }
        })

        const obj: Stats = {
            calories: calories,
            proteins: proteins,
            carbohydrates: carbohydrates,
            fats: fats,

        }

        setStats(obj);
    } catch (error) {
        console.log("problema la getTodayStats: ", error)
    }




}