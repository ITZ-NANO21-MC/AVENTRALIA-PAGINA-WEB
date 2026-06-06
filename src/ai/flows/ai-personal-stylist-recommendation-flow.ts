'use server';
/**
 * @fileOverview An AI personal stylist agent that recommends clothing based on personal development goals.
 *
 * - aiPersonalStylistRecommendation - A function that handles the clothing recommendation process.
 * - AIPersonalStylistRecommendationInput - The input type for the aiPersonalStylistRecommendation function.
 * - AIPersonalStylistRecommendationOutput - The return type for the aiPersonalStylistRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIPersonalStylistRecommendationInputSchema = z.object({
  personalDevelopmentGoals: z
    .string()
    .describe('The user\'s personal development and leadership goals.'),
});
export type AIPersonalStylistRecommendationInput = z.infer<
  typeof AIPersonalStylistRecommendationInputSchema
>;

const AIPersonalStylistRecommendationOutputSchema = z.object({
  recommendations: z
    .array(
      z.object({
        itemName: z.string().describe('The name of the recommended clothing item or outfit.'),
        description: z
          .string()
          .describe('A detailed description of the recommended item or outfit.'),
        alignmentExplanation: z
          .string()
          .describe(
            'An explanation of how this item or outfit aligns with the user\'s personal development goals.'
          ),
      })
    )
    .describe('A list of clothing and outfit recommendations.'),
});
export type AIPersonalStylistRecommendationOutput = z.infer<
  typeof AIPersonalStylistRecommendationOutputSchema
>;

export async function aiPersonalStylistRecommendation(
  input: AIPersonalStylistRecommendationInput
): Promise<AIPersonalStylistRecommendationOutput> {
  return aiPersonalStylistRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiPersonalStylistRecommendationPrompt',
  input: {schema: AIPersonalStylistRecommendationInputSchema},
  output: {schema: AIPersonalStylistRecommendationOutputSchema},
  prompt: `You are an expert personal growth and leadership stylist for Aventralia, a brand focused on evolution, growth, and personal leadership. Your slogan is "Evoluciona, crece y lidera tu camino." 

The customer is looking for clothing and outfit recommendations from Aventralia's collection that align with their personal development goals. 

Analyze the user's goals and provide specific clothing or outfit recommendations. For each recommendation, explain how the style projects evolution, confidence, and aligns with their aspirations. Be creative and align with the brand's aesthetic (modern, minimalist, premium).

User's Personal Development Goals: {{{personalDevelopmentGoals}}}`,
});

const aiPersonalStylistRecommendationFlow = ai.defineFlow(
  {
    name: 'aiPersonalStylistRecommendationFlow',
    inputSchema: AIPersonalStylistRecommendationInputSchema,
    outputSchema: AIPersonalStylistRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
