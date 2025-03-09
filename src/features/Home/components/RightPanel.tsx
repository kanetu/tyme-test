import CharacterCard from "@/components/CharacterCard";
import React from "react";

type RightPanelProps = {};

const RightPanel: React.FC<RightPanelProps> = (props: RightPanelProps) => {
    const mockedData = [
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
        {
            price: "2.75",
            authorName: "Ghozali_Ghozalu",
            type: "Epic",
            cardTitle: "The DJ",
            cardImageUrl: "/images/assassin-person.png",
            authorAvatar: "/images/the-dj-person.png",
        },
    ];
    return (
        <div className="lg:mx-[40px] grid md:grid-cols-3 md:mt-[20px] lg:grid-cols-4 gap-[40px]">
            {React.Children.toArray(
                mockedData.map((data) => (
                    <CharacterCard
                        price={data.price}
                        authorName={data.authorName}
                        type={data.type}
                        cardTitle={data.cardTitle}
                        cardImageUrl={data.cardImageUrl}
                        authorAvatar={data.authorAvatar}
                    />
                ))
            )}
        </div>
    );
};

export default RightPanel;
