import api from "@/lib/axios";
import type { Idea } from "@/types";

const fetchIdeas = async (): Promise<Idea[]> => {
  const res = await api.get('/ideas');
  return res.data;
};

const fetchIdea = async (ideaId: string): Promise<Idea> => {
  const res = await api.get(`/ideas/${ideaId}`);
  return res.data;
};

const createIdea = async (newIdea: { title: string; summary: string; description: string; tags: string[] }): Promise<Idea> => {
  const res = await api.post('/ideas', { ...newIdea, createdAt: new Date().toISOString() });

  return res.data;
}

const deleteIdea = async (ideaId: string): Promise<void> => {
  await api.delete(`/ideas/${ideaId}`);
}

const updateIdea = async (ideaId: string, updatedData: { title: string; summary: string; description: string; tags: string[] }): Promise<Idea> => {
  const res = await api.put(`/ideas/${ideaId}`, updatedData)
  return res.data;
}

export { fetchIdeas, fetchIdea, createIdea, deleteIdea, updateIdea }