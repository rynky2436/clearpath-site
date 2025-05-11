import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { services, audiences } from "../shared/data";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for services data
  app.get("/api/services", (req, res) => {
    res.json(services);
  });
  
  app.get("/api/services/:slug", (req, res) => {
    const service = services.find(s => s.slug === req.params.slug);
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });
  
  // API routes for audiences data
  app.get("/api/audiences", (req, res) => {
    res.json(audiences);
  });
  
  app.get("/api/audiences/:slug", (req, res) => {
    const audience = audiences.find(a => a.slug === req.params.slug);
    if (!audience) {
      return res.status(404).json({ message: "Audience not found" });
    }
    res.json(audience);
  });
  
  // Form submission endpoint (just returns success for demo)
  app.post("/api/contact", (req, res) => {
    // In a real implementation, this would save to a database or send an email
    res.json({ success: true, message: "Contact form submission received" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
